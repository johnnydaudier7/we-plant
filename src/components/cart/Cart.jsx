import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import CartItem from './cartItem/CartItem'
import EmptyCart from './emptyCart/emptyCart'
import Button from '../button/Button'

function Cart () {
  const { cartList, cartTotal, clearCart } = useCartContext()

  return (
    <div className='cart-container'>
      {cartList.length > 0
        ? <>
          <div className='cart-title'><h1>Your Cart</h1></div>
          {cartList.map((item) => <CartItem key={item.id} item={item} />)}
            <Button 
            buttonText={'Clear Cart'} 
            className={'clear-cart-btn'}
            onClick={clearCart}>
              
            </Button>          
          <div className='checkout-container'>
            <p className='checkout-total'>Total: ${cartTotal}</p>
            <NavLink to='/checkout' className='checkout-link'>
              <Button 
              className={'checkout-btn'} 
              buttonText={'Checkout'}>              
              </Button>              
            </NavLink>            
          </div>
        </>
        : <EmptyCart />}

    </div>
  )
}
export default Cart
