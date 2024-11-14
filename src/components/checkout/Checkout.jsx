import { useCartContext } from '../../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import CheckoutSidebar from './CheckoutSidebar';


const Checkout = () => {
  const { cartList, cartTotal } = useCartContext()

  const newPayment = async () => {

    try{
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)   
      const body = {
        products: cartList,
        amount: cartTotal
      }
    
      const response = await fetch(import.meta.env.VITE_SERVER_PAYMENT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
    
      const paymentSession = await response.json()
      
      const result = stripe.redirectToCheckout({
        sessionId: paymentSession.id
      })
      if(result.error){
        console.log(result.error)
      }
    }catch(err){
      console.log(err)
    }    
  }
  
  return ( 
    <>
      <div className="checkout-wraper">
        <h1>Checkout</h1>
        <div className="checkout-container">
          <CheckoutForm onSubmitPayment={newPayment} /> 
          <CheckoutSidebar />      
        </div>
      </div>    
    </>
  );
};

export default Checkout

