import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from ".";
interface OrderData {
    name: string;
    email: string;
    street: string;
    postal: string;
    city: string;
}
interface OrderState{
    status:string,
    error: null | string,
};
const initialState:OrderState={
    status:'idle',
    error:null 
}

const orderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{
        setloading(state){
          state.status='loading';
        },
        setError(state,action:PayloadAction<string>){
            state.status='error';  
            state.error=action.payload;
        },
        setSuccess(state){
            state.status='success';
            
        }
    } ,

})

export const sendData= (orderData:OrderData)=>{
    return async (dispatch:AppDispatch)=>{
    dispatch(orderActions.setloading())
        try{
        const response= await fetch('http://localhost:3000/orders',{
            method:'post',
            body:JSON.stringify(orderData),
            headers:{'content-type':'application/json'}
        });
           if (!response.ok) {
            throw new Error('sending data failed');
           }
           const data=await response.json();
           return data;
           dispatch(orderActions.setSuccess());
           }
           catch(error:any){
            dispatch(orderActions.setError(error.message||'failed to send order'));

           }
    }

  
    }
    

export const orderActions=orderSlice.actions;
export default orderSlice;