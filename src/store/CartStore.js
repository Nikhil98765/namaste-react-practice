import {createSlice} from "@reduxjs/toolkit";

const CartStore = createSlice({
  name: "Cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);

      // TODO: Old way of not mutating the state still works
      // return {
      //   ...state,
      //   items: [...state.items, action.payload]
      // }
    },
    removeItem: (state, action) => {
      state.items.splice(state.items.indexOf(action.payload), 1);
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      // return {}
    }
  }
})

export const {addItem, removeItem, clearCart, } = CartStore.actions

export default CartStore.reducer;
