import { NavLink } from 'react-router-dom'
import errorImage from '../../assets/error-image.png'
import Button from '../button/Button'

const ErrorComponent = ({ errorMessage }) => {
  const message = errorMessage ? errorMessage : "Something went wrong..."
  return (
    <div className='error-container'>
      <div className='error-info-container'>
        <h2>Error</h2>
        <p>{message}</p>
        <NavLink to='/'> 
          <Button buttonText={'Go to Home'}></Button>
        </NavLink>
      </div>
      <div className='error-img-container'>
        <img src={errorImage} alt='' />
      </div>
    </div>
  )
}

export default ErrorComponent
