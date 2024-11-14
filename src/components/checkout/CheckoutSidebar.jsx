import { useCartContext } from "../../context/CartContext";
import { FaBoxOpen, FaTruck  } from "react-icons/fa"
import CheckoutItem from "./CheckoutItem";

const CheckoutSidebar = () => {
    
    const { cartList, cartTotal} = useCartContext()
 

    return(
        <div className="checkout-sidebar-container">
            <div className="checkout-sidebar-items-container">
                {cartList.map((item) => <CheckoutItem key={item.id} item={item}/>)}
            </div>
            <div className="checout-sidebar-content">
                <p>Total: <span> {cartTotal} €</span></p>
                <p>Shipment: <span>Free</span></p>
                <p>Sales tax: <span>--</span></p>

            </div>
            <div className="checkout-sidebar-footer">
                <div className="checkout-sidebar-footer-item">                                        
                    <FaBoxOpen alt={' '}/>                    
                    <p> 30-day extended return policy </p>                    
                </div>
                <div className="checkout-sidebar-footer-item">                    
                    <FaTruck alt={' '}/> 
                    <p> Fast, free shipping  </p>                  
                                       
                </div>
            </div>
        </div>
    )
}
export default CheckoutSidebar