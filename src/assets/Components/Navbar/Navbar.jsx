import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../imges/logo.png'
import searchIcon from '../../imges/search_icon.svg'
import bellIcon from '../../imges/bell_icon.svg'
import profile_img from '../../imges/profile_img.png'
import caret_icon from '../../imges/caret_icon.svg'
import { logout } from '../../firebase'


const Navbar=() =>{

const navRef = useRef();

useEffect(()=>{
window.addEventListener('scroll',()=>{
  if(window.scrollY >= 80){
    navRef.current.classList.add('nav-dark')
  }else{
      navRef.current.classList.remove('nav-dark')
  }
})

},[])

  return (
   <div ref={navRef} className='navbar'>
   
     <div className="navbar_left">
        <img src={logo} alt="image" />
        <ul>
        <li>Home</li>
        <li>Tv Show</li>
        <li>Movie</li>
        <li>New and Populr</li>
        <li>My List</li>
        <li>Browse By Languges</li>
        </ul>
    </div>
   <div className="navbar_right">
    <img src={searchIcon} alt="icon" className='icons' />
      <p>Children</p>
      <img src={bellIcon} alt="icon" className='icons' />
      <div className="navbar_profile">
        <img src={profile_img} alt="icon" className='profile' />
        <img src={caret_icon} alt="icon" className='icons' />
      <div className="dropdown">
        <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
      </div>

      </div>
   </div>
  </div>
  )
}

export default Navbar
