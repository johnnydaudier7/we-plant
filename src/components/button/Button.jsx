const Button = ({buttonText, onClick, className, type}) => {
    
    return(
        <button 
        {...(onClick && { onClick })}
        {...(className && { className })}
        {...(type && { type })}
        >
        {buttonText && buttonText}
        </button>
    )
}
export default Button