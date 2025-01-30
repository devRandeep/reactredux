import { configureStore } from '@reduxjs/toolkit'
 import wishListSlice from '../features/counter/whishListSlice'

 const store = configureStore({
  reducer: {
    wishList: wishListSlice, 
  },
});

export default store;