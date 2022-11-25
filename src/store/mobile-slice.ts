import { createSlice } from "@reduxjs/toolkit";


const initialState = { 
  isMobile: false,
}


const Mobile = createSlice({
  name:'mobile',
  initialState,
  reducers:{
    isMobile(state){
      state.isMobile = true;
    },

    isDesktop(state){
      state.isMobile = false;
    }
  },
})



export const MobileActions = Mobile.actions;
export default Mobile;