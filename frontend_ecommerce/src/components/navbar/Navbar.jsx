import { Link } from 'react-router-dom'
import {NavBarStyles} from './NavBar.Styles'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-20  ">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to={'/'}>Homepage</Link></li>
          <li><Link to={'/'}>Portfolio</Link></li>
          <li><Link to={'/'}>About</Link></li>
        </ul>
      </div>
    </div>
    <div className="navbar-center flex flex-row">
      <Link to={'/'} className="font-semibold text-3xl   rounded h-12 w-max flex flex-row justify-between w-80 ">
          E-commerce NFT
          <img  className={NavBarStyles.logo }src="https://cdn3.iconfinder.com/data/icons/lylac-ecommerce/32/Store-512.png" alt="" />
          </Link>
    </div>
    <div className='navbar-end'>
        <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
            </div>
        </label>
        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
            <Link to={'/'} className="justify-between">
                Profile
                <span className="badge">New</span>
            </Link>
            </li>
            <li><Link to={'/'}>Settings</Link></li>
            <li><Link to={'/'}>Logout</Link></li>
        </ul>
        </div>
    </div>
  </div>
  )
}

export default Navbar