import { configureStore } from '@reduxjs/toolkit'
import CartSlice  from './slice/CartSlice'



export default configureStore({
  reducer: {
    cartDetails:CartSlice
  }
})