import { createSlice } from "@reduxjs/toolkit";

const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState: {
    shoppingCart: [],
    contactInformation: null,
    shippingInformation: null,
  },
  reducers: {
    addItem(state, action) {
      state.shoppingCart.push({
        title: action.payload.title,
        itemID: action.payload.id,
        image: action.payload.image,
        description: action.payload.description,
        price: action.payload.price,
        quantity: 1,
      });
    },

    addOne(state, action) {
      state.shoppingCart.forEach((item) => {
        if (item.itemID == action.payload.id) {
          item.quantity++;
        }
      });
    },

    lessOne(state, action) {
      state.shoppingCart.forEach((item) => {
        if (item.itemID == action.payload.id) {
          item.quantity--;
        }
      });
    },

    deleteItem(state, action) {
      state.shoppingCart.forEach((item) => {
        if (item.itemID == action.payload.id) {
          let index = state.shoppingCart.indexOf(item);

          state.shoppingCart.splice(index, 1);
        }
      });
    },

    storeContactInfo(state, action) {
      state.contactInformation = action.payload.contactInfo;
    },

    storeShippingInfo(state, action) {
      state.shippingInformation = action.payload.shippingInfo;
    },

    clearAll(state, action) {
      state.shippingInformation = null;
      state.contactInformation = null;
      state.shoppingCart = [];
    },
  },
});

export const {
  addItem,
  addOne,
  lessOne,
  deleteItem,
  storeContactInfo,
  storeShippingInfo,
  clearAll,
} = shoppingCart.actions;
export default shoppingCart.reducer;
