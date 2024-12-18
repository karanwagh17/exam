import React from 'react'
import { NavLink } from 'react-router'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <NavLink to='/'>home</NavLink>
    <NavLink to='/aboute'>about</NavLink>
    <NavLink to='/Login'>Login</NavLink>
    <NavLink to='/producliting'>product-list</NavLink>
    <NavLink to='/Addtocart'>cart</NavLink>






    </div>
  )
}

export default Navbar
