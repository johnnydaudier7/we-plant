import { useEffect, useState } from 'react'
import PlantCard from './PlantCard'
import getPages from '../../utils/getPages'
import getClimats from '../../utils/getClimats'
import Pagination from '../pagination/Pagination'
import ClimateFilter from '../climats/ClimateFilter'
import getPlantsFromStorage from '../../utils/getPlantsFromStorage'

const PlantsList = ( ) => {
  const [filter, setFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedClimat, setSelectedClimat] = useState('')
  const [plantsToRender, setPlantsToRender] = useState([])
  const pagesToRender = getPages()
  const plantsPerPage = 15 

  const getPlantsToRender = () => {

    const lastIndex = plantsPerPage * currentPage
    const firstIndex = lastIndex - plantsPerPage     
    return getPlantsFromStorage().slice(firstIndex, lastIndex)

  }

  // GET ALL CLIMATS
  const allClimats = getClimats()

  
  // RENDERING FROM STATE
  useEffect(() => {
    if (filter) {
      try {
        const splited = selectedClimat.split(' ').join('').toLowerCase();
        const filtered = getPlantsFromStorage().filter((plant) =>
          plant.Climat.split(' ').join('').toLowerCase() === splited
        );
        setPlantsToRender(filtered);
      } catch (err) {
        console.error(err.message);
        setPlantsToRender(getPlantsToRender());
      }
    } else {      
      setPlantsToRender(getPlantsToRender());
    }
  }, [currentPage, filter, selectedClimat]);

  // PAGE HANDLING
  const handleLastPage = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
  }
  const handleNextPage = () => {
    const pages = pagesToRender.length
    if (currentPage === pages) return
    setCurrentPage(currentPage + 1)
  }
  const handleCurrentPageFromNumbers = (num) => {
    setCurrentPage(num)
  }
  // FILTER HANDLING
  const handlePlantsClimateFilter = (event) => {
    const newClimat = event.target.value
    setSelectedClimat(newClimat)
    setFilter(true)
  }
  const removeFilter = () => {
    setFilter(!filter)
    setSelectedClimat(allClimats[0])
  }

  return (
    <>      
      <div className='plant-list-container'>      
        <ClimateFilter
          value={selectedClimat}
          filter={filter}
          onChange={handlePlantsClimateFilter}
          removeFilter={removeFilter}
        />
        <div className='cards-container'>        
          {plantsToRender.map(plant => 
            <PlantCard key={plant.id} plant={plant}/>
          )}
        </div>

        {!filter && <Pagination
          currentPage={currentPage}
          pagesToRender={pagesToRender}
          handleLastPage={handleLastPage}
          handleNextPage={handleNextPage}
          handleCurrentPageFromNumbers={handleCurrentPageFromNumbers}/>
        }
      </div>    
    </>
  )
}

export default PlantsList
