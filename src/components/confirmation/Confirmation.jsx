import { useParams } from "react-router"
import Loader from "../loader/Loader"
import getDateFromFirebase from "../../utils/getDateFromFirebase"
import { useEffect, useState } from "react"
import getFirebaseOrder from "../../utils/getFirebaseOrder"


const Confirmation = () =>{
    const { orderId } = useParams()
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState(null)
  
    useEffect(() => {
        if(orderId){
            getFirebaseOrder(orderId)
            .then(order => setOrder({ id: orderId.slice(-7), ...order}))
            .then(() => {
                setTimeout(() => {
                    setLoading(false)
                },3000)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
        }
    },[])
    
    return (
        <>            
            <button onClick={() => console.log(order)}>show doc</button>
            {loading ? 
            <Loader message={'Processing order...'}/> 
            :            
            <div className="confirmation-page">
                <header className="confirmation-header">
                    <h1>Thanks for your purchase!</h1>
                    <p>Your order was successfully processed.</p>
                </header>
                
                <section className="order-summary">
                    <h2>Order summary</h2>
                    <div className="order-details">
                        <p><strong>Order Number:</strong> {order.id} </p>
                        <p><strong>Items:</strong> {order.totalItems}</p>
                        <p><strong>Total:</strong> ${order.totalPrice}</p>
                        <p><strong>Date:</strong> {getDateFromFirebase(order.date)}</p>
                    </div>
                    <div className="shipping-info">
                        <h3>Shipping Information</h3>
                        <p>{order.shipping.address}, {order.shipping.city}</p>
                        <p>Estimated delivery date: 72 working hours after the order is placed.</p>
                    </div>
                </section>
    
                <section className="payment-info">
                    <h2>Payment Details</h2>
                    <p>Card ended in  {order.payment.slice(-4)}</p>
                </section>
    
                <section className="additional-actions">
                    <button >Imprimir Pedido</button>
                    <button >Ver Productos Recomendados</button>
                </section>
    
                <div className="confirmation-footer">
                    <p>¿Necesitas ayuda? Contacta a nuestro <a href="mailto:support@example.com">soporte al cliente</a>.</p>
                </div>
            </div> 
            }
        </>
    )
}




export default Confirmation