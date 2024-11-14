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
        ? 
        <>
          <div className="cart-items-container">
            <div className='cart-title'><h1>Your Cart</h1></div>
            {cartList.map((item) =>
              <CartItem key={item.id} item={item} />)
            }                    
            <div className='cart-checkout-container'>
              <p className='cart-checkout-total'>Total: ${cartTotal}</p>
              <div className="cart-checkout-buttons">
                <NavLink to={'/checkout'}>
                  <Button className={'checkout-btn'} buttonText={'Checkout'}/> 
                </NavLink>

                <Button buttonText={'Clear Cart'} className={'clear-cart-btn'} onClick={clearCart}/>
                
              </div>          
                    
            </div>
          </div>          
        </>
         
      : <EmptyCart />}

    </div>
  )
}
export default Cart
