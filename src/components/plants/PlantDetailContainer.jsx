import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import PlantDetail from './PlantDetail'
import ErrorComponent from '../error/ErrorComponent'

const PlantDetailContainer = () => {
  const [plant, setPlant] = useState(null)
  const [error, setError] = useState(null)  
  const { plantId } = useParams()
  const loaderMessage = 'Loading plant info...'
  
  useEffect(() => {
    try{
      const plants = JSON.parse(localStorage.getItem('plants'))
      const filteredPlant = plants.find(p => p.id === String(plantId))
      setPlant(filteredPlant)
    } catch (err){
      setError('Error loading plant info.')
    }
  },[plantId])

  return (
    <>
      {error && <ErrorComponent errorMessage={error}/>}
      {plant ? <PlantDetail item={plant} /> : <Loader message={loaderMessage} />}
    </>
  )
}
export default PlantDetailContainer
