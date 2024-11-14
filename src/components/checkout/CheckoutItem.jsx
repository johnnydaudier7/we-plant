const CheckoutItem = ( { item } ) => {    
    return (
        <div className="checkout-item-container">
            <div className="checkout-item-image">
                <img src={item.img} alt="" />
            </div>
            <div className="checkout-item-desc">
                <h3>{item.name}</h3>
                <p>Price: {item.price} €</p>
                <p>Quantity: {item.amount}</p>
            </div>                        
        </div>
    )
}

export default CheckoutItem