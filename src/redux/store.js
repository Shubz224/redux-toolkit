import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

//Import configureStore from Redux Toolkit.
//Import cartReducer from the cart slice.
//Create and export the Redux store:
//  slice.
//Enable Redux DevTools for development debugging.











export const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
    devTools: true,
  });