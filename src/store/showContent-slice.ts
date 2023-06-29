import { createSlice } from "@reduxjs/toolkit";

type ShowContentState = {
  show: boolean;
};

const initialState: ShowContentState = {
  show: false,
};

const ShowContentSlice = createSlice({
  name: "showContent",
  initialState,
  reducers: {
    show(state){
        return {show: !state.show}
    },
  },
});


export const ShowContentActions = ShowContentSlice.actions;
export default ShowContentSlice;