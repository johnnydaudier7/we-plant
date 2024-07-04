import { useEffect, useState } from 'react'
import PlantsList from './PlantsList'
import Loader from '../loader/Loader'
import { usePlants } from '../../services/usePlants'
import ErrorComponent from '../error/ErrorComponent'
import setPlantsInStorage from '../../utils/setPlantsInStorage'
import getPlantsFromStorage from '../../utils/getPlantsFromStorage'

const AllPlantsContainer = () => {
  const { plants, error } = usePlants()
  const [loading, setLoading] = useState(true)
  const [allPlants, setAllPlants] = useState(null)

  useEffect(() => {
    if (!plants) {
      if(!error){
        return
      } else{setLoading(false)}
    }else {      
      setPlantsInStorage(plants)
      setAllPlants(getPlantsFromStorage())
      setLoading(false)
    }
  }, [plants, error])

  return (
    <>
      {loading && <Loader message={'Loading all plants...'}/>}
      {error && <ErrorComponent errorMessage={error.message} />}
      {allPlants && <PlantsList />}
    </>
  )
}
export default AllPlantsContainer
