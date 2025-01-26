import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";



const FoodDetail:React.FC=()=>{
    const params=useParams();
    const location=useLocation();
    const{name,description}=location.state ||{}

     return(
        <div>
        <h1>How It’s Made</h1>
        {name && <h2>{name}</h2>}
        <p>{description || params.description}</p> 
         <p><Link to={'/'}>BACK</Link></p>
       </div>
     );

}
export default FoodDetail;