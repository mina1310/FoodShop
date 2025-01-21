import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal";
import foodSlice from "./food-slice";




const store=configureStore({
    reducer:{modal:modalSlice.reducer , food:foodSlice.reducer}
})

export default store;





//  export const getData=()=>{
//    return async (dispatch)=>{
//     dispatch()
//    }

 

//     const fetchData=async()=>{
//         try{
//             const response=await fetch('http://localhost:3000')
//                 if(!response.ok){
//                 throw new errror;
                
                

        
//             }
//         } catch(errror)
     


//     } 
// } 
    
    
    
    
    
    