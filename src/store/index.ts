import { configureStore } from "@reduxjs/toolkit";
import Mobile from "./mobile-slice";
import Gendner from "./gender-slice";
import ShowContentSlice from "./showContent-slice";


const store = configureStore({
  reducer: {
    showContent: ShowContentSlice.reducer,
    gender: Gendner.reducer,
    mobile: Mobile.reducer,
  },
});

store.subscribe(() => {
});

export type RootState = ReturnType<typeof store.getState>;
export default store;