import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    numOfItems: 0, // Initialize numOfItems to 0 (this will be recalculated)
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const parsedCost = parseFloat(cost.replace('$', '')); // Convert cost to a number (assuming string format like "$15")
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost: parsedCost, quantity: 1 });
      }

      // Recalculate numOfItems
      state.numOfItems = state.items.reduce((total, item) => total + item.quantity, 0);
    },

    removeItem: (state, action) => {
      const { name, quantity } = action.payload;
      state.items = state.items.filter(item => item.name !== name);

      // Recalculate numOfItems after removal
      state.numOfItems = state.items.reduce((total, item) => total + item.quantity, 0);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      } else {
        console.warn(`Item with name "${name}" not found.`);
      }

      // Recalculate numOfItems after quantity update
      state.numOfItems = state.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in the store
export default CartSlice.reducer;
