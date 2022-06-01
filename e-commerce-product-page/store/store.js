import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlice'
import filterReducer from '../slices/filterSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
  }
})

