import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  gender: '', 
  clicked: false,
}

const Gendner = createSlice({
  name: "gender",
  initialState,
  reducers: {

    clickedGender(state, actions){
      state.gender = actions.payload.gender;
      state.clicked = true;
    }

  },
});

export const GenderActions = Gendner.actions;
export default Gendner;