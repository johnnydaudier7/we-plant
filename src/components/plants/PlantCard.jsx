import Button from '../button/Button'
import { NavLink } from 'react-router-dom'
import { getPrice } from '../../utils/getPrice'

function PlantCard ({ plant }) {
  
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='climat'>{plant.Climat}</div>
        <div className='card-img-box'>
          <img src={plant.Img} alt='' />
        </div>
        <div className='content'>
          <div className='title'>{plant['Common name']?.[0] ?? 'Interior plant'}</div>
          <div className='price'>${getPrice(plant)}</div>
          <div className='description'>
            <p>Plant family: {plant.Family}</p>
            <p>Plant category: {plant.Categories} </p>
          </div>
        </div>
        <div className='details-button'>
          <NavLink to={`/${plant.id}`}>
            <Button buttonText={'More details'}/>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default PlantCard
