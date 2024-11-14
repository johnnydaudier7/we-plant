import { useEffect, useState } from "react"
import Button from "../button/Button"
import getDateFromFirebase from "../../utils/getDateFromFirebase"
import Loader from "../loader/Loader"
import getFirebaseOrder from "../../utils/getFirebaseOrder"
import ErrorComponent from "../error/ErrorComponent"

const Success = () => {
    const [loading, setLoading] = useState(true)
    const [instructions, setInstructions] = useState('')
    const [deliveryInstruction, setDeliveryInstruction] = useState(false)
    const [order, setOrder] = useState(null)
    const [error, setError] = useState(null)   
    
    const orderID = localStorage.getItem('newOrderID')

    const toggleInstructions = () => {
        setDeliveryInstruction(!deliveryInstruction)
    }
    const handleInstructionInput = (evt) => {
        const { value } = evt
        setInstructions(value)
    }

    useEffect(() => {
        try{
            if(!orderID || orderID === undefined){
                setError('Something went wrong...')
                setLoading(false)
            }else{
                getFirebaseOrder(orderID)
                .then(response  => setOrder({id: orderID.slice(-7), ...response }))
                .then(() => {
                    setTimeout(() => {                        
                        localStorage.removeItem('newOrderID')
                        setLoading(false)
                    },3000)
                })
                .catch(err => {
                    console.error(err)
                    setError(err.message)                    
                })
            }
        }catch(err) {
            console.error(err)
            setError(err.message)
        }
    }, [])

    return (
        <>
            {loading && <Loader message={'Placing order...'}/> }       
            {error && <ErrorComponent errorMessage={error} /> }
            {order && <div className="confirmation-page">
            
                <div className="confirmation-items-details">
                    <h1> Your purchase is confirmed</h1>
                    <p>Thanks for your purchase, {order.user.name}!</p>
                    <ul>
                        {order.items.map(item => <li key={item.name}> {item.name} x {item.amount}</li>)}
                    </ul>
                </div>
                <div className="shipping-info">
                    <h2>Shipping Information</h2>
                    <p>Delivering to {order.user.name}</p>
                    <p>{order.shipping.address}, {order.shipping.city}</p>
                    <p>Estimated delivery date: 72 working hours after the order is placed.</p>
                </div>
                <div className="order-details">
                        <p><strong>Order Number:</strong>  {order.id} </p>
                        <p><strong>Items:</strong> {order.totalItems}</p>
                        <p><strong>Total:</strong> $ {order.totalPrice}</p>
                        <p><strong>Date:</strong> {getDateFromFirebase(order.date)}</p>
                </div>                
            </div>}
        </>
    )
}

export default Success


