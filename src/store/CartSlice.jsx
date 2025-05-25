import { createSlice } from "@reduxjs/toolkit";

const init = {
  CartData: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: init,
  reducers: {
    addCart: (state, action) => {
      state.CartData.push({ id: action.payload.id, item: action.payload });
    },
    delCart: (state, action) => {
      state.CartData = state.CartData.filter((data) => String(data.id) !== String(action.payload.id));
    },
    decreaseCart: (state, action) => {
      // Fixed: Proper findIndex with callback function
      const idx = state.CartData.findIndex((cartItem) => String(cartItem.id) === String(action.payload.id));
      
      if (idx !== -1) {
        // Decrease quantity but don't go below 1
        if (state.CartData[idx].item.quantity > 1) {
          state.CartData[idx].item.quantity -= 1;
        }
        
        // Recalculate total - handle price format properly
        const price = typeof state.CartData[idx].item.price === 'string' 
          ? parseFloat(state.CartData[idx].item.price.replace('$', ''))
          : state.CartData[idx].item.price;
          
        state.CartData[idx].item.total = state.CartData[idx].item.quantity * price;
      }
    },
    increaseCart: (state, action) => {
      // Fixed: Proper findIndex with callback function
      const idx = state.CartData.findIndex((cartItem) => String(cartItem.id) === String(action.payload.id));
      
      if (idx !== -1) {
        // Increase quantity
        state.CartData[idx].item.quantity += 1;
        
        // Recalculate total - handle price format properly
        const price = typeof state.CartData[idx].item.price === 'string' 
          ? parseFloat(state.CartData[idx].item.price.replace('$', ''))
          : state.CartData[idx].item.price;
          
        state.CartData[idx].item.total = state.CartData[idx].item.quantity * price;
      }
    },
  },
});

export const { addCart, delCart, decreaseCart, increaseCart } = CartSlice.actions;
export default CartSlice.reducer;