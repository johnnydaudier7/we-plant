import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCartContext } from '../../../context/CartContext'

const CartIcon = () => {
  const { cartTotalQuantityNumber } = useCartContext()
  

  return (
    <NavLink to='/cart'>
      <div className='cart-icon-container'>
        <FaShoppingCart className='cart-icon' />
        <span className='cart-badge'>{cartTotalQuantityNumber}</span>
      </div>
    </NavLink>

  )
}
export default CartIcon
