import { NavLink } from 'react-router-dom'
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa'
import { useCartContext } from '../../../context/CartContext'
import Button from '../../button/Button'

export function CartItem ({ item }) {

  const { addToCart, deleteItemFromCart, removeItem } = useCartContext()
  const amount = Number(item.amount)
  const total = Number(item.amount) * Number(item.price)
  const cartItemButtons = [
    {
      name: 'add',
      buttonText: <FaPlus />,
      className: 'cart-item-button',
      onClick: () => addToCart(item)
    },
    {
      name: 'minus',
      buttonText: <FaMinus />,
      className: 'cart-item-button',
      onClick: () => removeItem(item.id)
    },
    {
      name: 'deleteItem',
      buttonText: <FaTrashAlt />,
      className: 'cart-item-button',
      onClick: () => deleteItemFromCart(item.id),
    }
  ]  

  return (
    <div key={item.id} className='cart-item'>
      <NavLink to={`/${item.id}`} className='cart-item-image-link'>
        <img src={item.img} className='cart-item-image' />
      </NavLink>
      <div className='cart-item-details'>
        <div className='cart-item-name'>
          <p>{item.name}</p>
        </div>
        <div className='cart-item-quantity'>
          {
          cartItemButtons.map(itemButton => 
          <Button
          key={itemButton.name}
          buttonText={itemButton.buttonText}
          className={itemButton.className}
          onClick={itemButton.onClick}/>)
          }          
        </div>
        <div className='cart-item-total'>
          <p>x {amount} = ${total}</p>
        </div>
      </div>
    </div>
  )
}
export default CartItem
