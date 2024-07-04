import { NavLink } from 'react-router-dom'


const footerOptions = [
  {text: '2024 WePlant Co.', path: '/'},
  {text: 'Plants', path: '/All'},
  {text: 'Care guides', path: '/care-guides'},
  {text: 'Contact', path: '/Contact'},
  
]
const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        {footerOptions.map((option, index) => 
          <NavLink 
          key={index} 
          to={option.path} 
          className='footer-link'> 
          {option.text} 
          </NavLink>)
        }
        <a href="#topnav" className='footer-link'>Scroll to top</a>
      </div>      
    </footer>
  )
}
export default Footer
