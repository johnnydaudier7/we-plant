import getClimats from '../../utils/getClimats'
import Button from '../button/Button'

function ClimateFilter ({ value, onChange, removeFilter, filter }) {
  const allClimats = getClimats()

  return (
    <div className='filter-container'>
      <label className='filter-label' htmlFor='climate-filter'>Display by climate:</label>
      <select
        id='climate-filter'
        className='filter-select'
        onChange={onChange}
        value={value}
      >
        {allClimats.map((climate, index) => {
          return <option key={index} value={climate}>{climate}</option>
        })}
      </select>
      {filter && <Button 
      className={'clean-filters-btn'}
      onClick={removeFilter}
      buttonText={'clean filters'}>        
      </Button>
      }

    </div>
  )
}
export default ClimateFilter
