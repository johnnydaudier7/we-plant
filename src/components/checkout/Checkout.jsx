import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FaExclamationTriangle } from 'react-icons/fa'
import { useCartContext } from '../../context/CartContext'
import submitOrder from '../../utils/submitOrder'
import { useNavigate } from 'react-router-dom'
import ErrorComponent from '../error/ErrorComponent'
import isNumericField from '../../utils/isNumericField'
import Button from '../button/Button'


const Checkout = () => {

  const { cartList, cartTotalQuantityNumber, cartTotal } = useCartContext()
  const [submitError, setSubmitError] = useState(null)
  const navigate = useNavigate()
   

  const validationSchema = yup.object({
    firstName: yup.string().required('This field is required'),
    lastName: yup.string().required('This field is required'),
    email: yup.string().required('This field is required').email('Invalid email format'),
    address: yup.string().required('This field is required'),
    state: yup.string().required('This field is required'),
    city: yup.string().required('This field is required'),
    zipCode: yup.string().required('This field is required'),
    cardName: yup.string().required('This field is required'),
    cardNumber:  yup.string().min(16, 'At least 16 characters').max(20,'The field cannot exceed 20 characters').required('This field is required'),
    expiryMonth: yup.string().max(2, 'The expiration month must be between 1 and 2 characters long.').min(1,'The expiration month must be between 1 and 2 characters long.').required('This field is required'),
    expiryYear: yup.string().max(4,'Please enter a 4-digit expiration year.').min(4,'Please enter a 4-digit expiration year.').required('This field is required'),
    cvv: yup.string().min(3,'The CVV must be at least 3 characters long.').required('This field is required')

  }).required()  

  //  FORM OBJECT
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    state: '',
    city: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  })
  //  TO RENDER 
  const formFields = [
    { name: 'firstName', label: 'First Name', type: 'text'},
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'address', label: 'Address', type: 'text' },
    { name: 'state', label: 'State', type: 'text' },
    { name: 'city', label: 'City', type: 'text' },
    { name: 'zipCode', label: 'Zip Code', type: 'text' },
    { name: 'cardName', label: 'Credit Card Name', type: 'text' },
    { name: 'cardNumber', label: 'Credit Card Number', type: 'text' },
    { name: 'expiryMonth', label: 'Expiry Month', type: 'text' },
    { name: 'expiryYear', label: 'Expiry Year', type: 'text' },
    { name: 'cvv', label: 'CVV', type: 'text' }
  ];
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
  const onSubmit = () => {
    
    const orderData = {
      user: {
        userName: formValues.firstName,
        userLastName: formValues.lastName,
        userEmail: formValues.email
      },
      items: cartList.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.amount,
        price: item.price
      })),
      totalItems: cartTotalQuantityNumber,
      totalPrice: cartTotal,
      date: new Date(),
      payment: formValues.cardNumber,
      shipping: {
        address: formValues.address,
        city: formValues.city
      }
    }
    submitOrder(orderData)
    .then((result) => {      
      if(result.error){
       setSubmitError(result.error)
      } else{        
        navigate('/Confirmation/' + result.id)
      }   
    })
    .catch(err =>  {
      setSubmitError(err.message)
    })
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
      zipCode: '',
      cardName: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: ''
    }
  }) 
  
  return (
    <>
      {submitError && <ErrorComponent errorMessage={submitError}/>}
      {!submitError && 
      <div className='checkout-container'>      
        <h2>Checkout</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          {formFields.map(field => <div key={field.name}>
            <label htmlFor={field.name}>{field.label}:</label><br />
              <input
                {...register(field.name, {onChange: handleChange})}
                className={errors[field.name] ? 'form-input-error' : 'form-input'}
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={`Your ${field.label.toLowerCase()} here`}
                
                value={formValues[field.name]}
              />
              {errors[field.name] && <span className='form-error-msg'><FaExclamationTriangle/> {errors[field.name].message}</span>}
              <br />
          </div> 
            
          )}
          <Button 
          type={'submit'}
          buttonText={'Complete Order'}>          
          </Button>
        </form>

      </div>
      }

    </>
  
    
  )
}

export default Checkout
