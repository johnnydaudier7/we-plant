import { NavLink } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

const Pagination = ({ currentPage, pagesToRender, handleCurrentPageFromNumbers, handleLastPage, handleNextPage }) => {
  return (
    <div className='pagination'>
      <NavLink onClick={handleLastPage} to='#'><FaAngleLeft /> Last</NavLink>
      {pagesToRender.map((page, index) => (
        <NavLink
          className={currentPage === page ? 'pagination-link-active' : 'pagination-link'}
          key={index}
          to='#'
          onClick={() => handleCurrentPageFromNumbers(page)}
        >
          {page}
        </NavLink>
      ))}
      <NavLink onClick={handleNextPage} to='#'>Next <FaAngleRight /></NavLink>
    </div>
  )
}

export default Pagination
