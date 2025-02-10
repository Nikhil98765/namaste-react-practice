import {configureStore} from "@reduxjs/toolkit";
import CartReducer from "./CartStore";


export const AppStore = configureStore({
  reducer: {
    cart: CartReducer
  }
});
