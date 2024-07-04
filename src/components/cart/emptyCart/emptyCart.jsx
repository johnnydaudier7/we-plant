import emptyCartImg from '../../../assets/empty-cart-image.png'
import { NavLink } from 'react-router-dom'
import Button from '../../button/Button'

const EmptyCart = () => {
  return (
    <div className='cart-container-empty'>
      <div className='cart-container-empty-text'>
        <h1>Your cart is empty</h1>
        <p>Time to fill your cart with Green Goodness!</p>
        <NavLink to='/All'>
          <Button buttonText={'Explore Plants'}></Button>
        </NavLink>
      </div>
      <img src={emptyCartImg} alt='' />
    </div>
  )
}

export default EmptyCart
