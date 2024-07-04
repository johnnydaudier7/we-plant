import { useState } from 'react'
import CartIcon from '../cart/cartIcon/CartIcon'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleTopNav = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    {
      linkText: 'WE PLANT',
      path: '/'
    },
    {
      linkText: 'All Plants',
      path: '/All'
    },
    {
      linkText: 'Care Guides',
      path: '/care-guides'
    },
    {
      linkText: 'Contact',
      path: '/Contact'
    },
    {
      linkText: 'About',
      path: '/About'
    }
  ]

  return (

    <div className={isOpen ? 'topnav responsive' : 'topnav'} id='topnav'>
      {menuItems.map((item, idx) =>
        <NavLink key={idx} to={item.path} className={'nav-link'}> {item.linkText} </NavLink>
      )}
      <NavLink to='#' className='icon' onClick={toggleTopNav}> {isOpen ? <FaTimes /> : <FaBars />} </NavLink>
      <CartIcon />
    </div>
  )
}
export default NavBar
