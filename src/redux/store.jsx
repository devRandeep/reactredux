import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '../features/counter/whishListSlice';

const store = configureStore({
    reducer: {
        wishlist: wishlistReducer,
    },
});

export default store; 
