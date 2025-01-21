import { NavLink } from "react-router-dom"
import React from "react";

const MainNavigation :React.FC=()=>{

    return(
        <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/orders'>Orders</NavLink>
        <NavLink to='/cart'>Cart(0)</NavLink>
        </div>
    )
}
export default MainNavigation;