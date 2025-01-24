import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    numOfItems: 0, // Initialize numOfItems to 0
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      state.numOfItems += 1; // Increment the total number of items
    },
    removeItem: (state, action) => {
      const { name, quantity } = action.payload;
      state.items = state.items.filter(item => item.name !== name);
      state.numOfItems -= quantity;

      // Ensure numOfItems is not negative
      if (state.numOfItems < 0) {
        state.numOfItems = 0;
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      } else {
        console.warn(`Item with name "${name}" not found.`);
      }
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in the store
export default CartSlice.reducer;
