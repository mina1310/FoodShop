import { NavLink } from "react-router-dom"
import React from "react";
import logo from '../../assets/logo.jpg';
import classes from './MainNavigation.module.css'

const MainNavigation :React.FC=()=>{

    return(
        <div className={classes.nav__header}>
        <div className={classes.nav__image}>
        <img src={logo} alt="this is logo img"  />
        </div >
        <div className={classes.nav__menu}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/orders'>Orders</NavLink>
        <NavLink to='/cart'>Cart<div className={classes.nav__menu_count}>0</div></NavLink>
        </div>
        </div>
    )
}
export default MainNavigation;