import { useCartContext } from '../../context/CartContext'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getPrice } from '../../utils/getPrice'
import Button from '../button/Button'

function PlantDetail ({ item }) {
  const { cartList, removeItem, addToCart } = useCartContext()
  const [thisAmount, setThisAmount] = useState(1)

  const plantDetails = [
    { label: 'Name (FR)', value: item['Common name (fr.)'] ? item['Common name (fr.)'] : 'N/A' },
    { label: 'Family', value: item.Family },
    { label: 'Category', value: item.Categories },
    { label: 'Climat', value: item.Climat },
    { label: 'Origin', value: item.Origin },
    { label: 'Latin name', value: item['Latin name'] ? item['Latin name'] : 'N/A' },
  ];
  const add = () => {
    const plantToAdd = {
      id: item.id,
      name: item['Common name']?.[0] ?? 'Interior plant',
      price: getPrice(item),
      category: item.Categories,
      img: item.Img,
      amount: thisAmount
    }
    addToCart(plantToAdd)
  }

  const getAmountById = (id) => {
    return cartList.find((item) => item.id === id)?.amount || 0
  }
  const amountPerItem = getAmountById(item.id)

  const plus = () => {
    setThisAmount(thisAmount + 1)
  }
  const minus = () => {
    if (thisAmount > 1) {
      setThisAmount(thisAmount - 1)
    }
  }

  return (
    <div className='details-container'>
      <div className='go-back-btn'>
        <NavLink to='/All' tabIndex={-1}>
          <Button buttonText={'BACK TO PLANTS'}></Button>
        </NavLink>
      </div>

      <h1>{item['Common name']}</h1>
      
      <div className='main-wrapper'>
        <div className='container'>
          <div className='product-div'>
            <div className='product-div-left'>
              <div className='img-container'>
                <img src={item.Img} alt='' />
              </div>              
            </div>
            <div className='product-div-right'>
              <span className='product-name'>{item['Common name']}</span>
              <span className='product-price'>$ {getPrice(item)}</span>
              <div>
                {                  
                  plantDetails.map((detail, index) => (
                    <p key={index}>
                      <strong>{detail.label}:</strong> {detail.value}
                    </p>
                  ))                
                }
              </div>
              
              <div className='btn-groups'>
                <Button 
                className={'add-cart-btn'}
                onClick={add}
                buttonText={'add to cart'}>                  
                </Button>                
              </div>
              <div>
                <div className='btn-quantity-group'>
                  <Button onClick={minus} buttonText={'-'}></Button>
                  {thisAmount}
                  <Button onClick={plus} buttonText={'+'}></Button>                  
                </div>
                {amountPerItem > 0 && (
                  <div className='subtract-buttons'>
                    <Button buttonText={'Remove item'}
                    onClick={() => removeItem(item.id)}
                    className={'item-remove-btn'}>                      
                    </Button>

                    <NavLink to='/cart' tabIndex={-1}>
                      <Button 
                      buttonText={'Go to cart'}
                      className={'go-to-cart-btn'}>                      
                      </Button>                    
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantDetail
