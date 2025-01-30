import { createSlice } from '@reduxjs/toolkit'

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState: { 
    value: 0
  },
  
  reducers: {
    wishlistcount: state => {
      state.value += 1
    }
  }
  
})

export const { wishlistcount} = wishListSlice.actions

export default wishListSlice.reducer