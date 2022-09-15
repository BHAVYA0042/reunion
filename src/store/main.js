import { configureStore } from "@reduxjs/toolkit"
import houseSlice from "./housingSlice"
export const housing_action=houseSlice.actions;
export const store= configureStore({
  reducer:{
    house_list:houseSlice.reducer
  }
})