import { configureStore } from "@reduxjs/toolkit";
import shoppingCart from "./shoppingCart";

export default configureStore({
  reducer: {
    shoppingCart: shoppingCart,
  },
});
