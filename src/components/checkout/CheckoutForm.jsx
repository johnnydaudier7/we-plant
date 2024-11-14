import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FaExclamationTriangle } from 'react-icons/fa'
import ErrorComponent from '../error/ErrorComponent'
import isNumericField from '../../utils/isNumericField'
import Button from '../button/Button'
import { useCartContext } from '../../context/CartContext'
import submitOrder from '../../utils/submitOrder'

const CheckoutForm = ({ onSubmitPayment }) => {

  
  const [submitError, setSubmitError] = useState(null)
  const { cartTotal, cartList, cartTotalItems } = useCartContext()
  
  //   YUP SCHEMA
  const validationSchema = yup.object().shape({
    firstName: yup.string().required('Your first name is required'),
    lastName: yup.string().required('Your last name is required'),
    email: yup.string().required('Email is required').email('Invalid email format'),
    address: yup.string().required('Address is required'),
    state: yup.string().required('State is required'),
    city: yup.string().required('City is required'),
    zip: yup.number().transform((value) => Number.isNaN(value) ? null : value).required('Zip is required')
  })

  //  FORM  VALUES OBJECT
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    state: '',
    city: '',
    zip: ''    
  })
  
  //  TO RENDER 
  const formFields = [
    { name: 'firstName', label: 'First Name', type: 'text'},
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'address', label: 'Address', type: 'text' },
    { name: 'city', label: 'City', type: 'text' },
    { name: 'state', label: 'State', type: 'text' },
    { name: 'zip', label: 'Zip Code', type: 'text' }    
  ]

  // INPUT HANDLERS.
  const handleChange = (event) => {
    const { name, value } = event.target
    
    if (!/^\d*$/.test(value) && isNumericField(name)){return}
    else{
      setFormValues(prevState => ({
        ...prevState, [name]: value
      }))
    }
  } 

  //USEFORM HOOK.  
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      state: '',
      city: '',
      zip: ''      
    }
  })

  const setOrder = async ( ) => {
    const order = {
      date: new Date(),
      items: cartList.map((item) => (
        { id: item.id, 
          name: item.name, 
          price: item.price, 
          amount: item.amount }
      )),
      shipping: {
        address: formValues.address,
        city: formValues.city,
        state: formValues.state
      },
      totalItems: cartTotalItems,
      totalPrice: cartTotal,
      user: {
        name: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email
      }
    }
    await submitOrder(order)
    
  }

  const onError = () => console.log(`An error occurred while trying to submit the form information`)

  const onSubmit = async () => {  
    try{      
      setOrder()
      await onSubmitPayment()
            
    }catch(err){
      console.error(`Error submiting data occurred: ${err}`)
    }
  }
  
  return (
    <>
      {submitError && <ErrorComponent errorMessage={submitError}/>}
      {!submitError && 
      <div className='form-container'>         
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <ul className='input-fields-container'>
            {formFields.map(field => <li key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
                <input
                  {...register(field.name, {onChange: handleChange})}
                  className={errors[field.name] ? 'form-input-error' : 'form-input'}
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={`Your ${field.label.toLowerCase()} here`}
                            
                />
                {errors[field.name] && <span className='form-error-msg'><FaExclamationTriangle/> {errors[field.name].message}</span>}
              </li>              
            )}
          </ul>
          
          <Button type={'submit'} buttonText={'Complete Order'}/>
        </form>        
      </div>
      }
    </>
  )
}

export default CheckoutForm