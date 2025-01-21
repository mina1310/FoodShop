import { NavLink } from "react-router-dom"
import React from "react";
import logo from '../assets/logo.jpg';

const MainNavigation :React.FC=()=>{

    return(
        <div id="nav__header">
        <div className="nav__image">
        <img src={logo} alt="this is logo img"  />
        </div >
        <div className='nav__menu'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/orders'>Orders</NavLink>
        <NavLink to='/cart'>Cart<div className="nav__menu-count">0</div></NavLink>
        </div>
        </div>
    )
}
export default MainNavigation;