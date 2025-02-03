import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const whishListSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleWishlist: (state, action) => {
            const product = action.payload;
            const index = state.items.findIndex(item => item.productTitle === product.productTitle);

            if (index !== -1) {
                state.items.splice(index, 1); 
            } else {
                state.items.push(product); 
            }
        },
    },
});

export const { toggleWishlist } = whishListSlice.actions;
export default whishListSlice.reducer;