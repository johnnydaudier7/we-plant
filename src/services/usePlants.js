import { useEffect, useState } from 'react'


export function usePlants () {
  const [plants, setPlants] = useState(null)
  const [error, setError] = useState(null)

  const plantsUrl = import.meta.env.VITE_RAPIDAPI_PLANTS_URL
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_PLANTS_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_PLANTS_API_HOST
    }
  }
  
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const apiResponse = await fetch(plantsUrl, options)
        if(!apiResponse.ok){
          setError(apiResponse.statusText)
        }
        const data = await apiResponse.json()
        setPlants(data)
      }
      catch(err) {
        setError(err.message)
      }    
    }
  fetchPlants()
}, [])
  return { plants, error }
}