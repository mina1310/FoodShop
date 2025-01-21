import { createSlice } from "@reduxjs/toolkit";
const modalSlice=createSlice({
    name:'modal',
    initialState:{
        showModal:false,
        contentModal:null
        
    },
    reducers:{
        toggleModal(state){
            state.showModal=!state.showModal;
        },
        showModal(state){
        state.showModal=true;
        },
        hideModal(state){
            state.showModal=false;
            state.contentModal=null;
        },
        setContentModal(state,action){
            state.contentModal=action.payload;
            console.log('contentModal')
        }
    
    }
})
export const modalActions=modalSlice.actions;
export default modalSlice;