import { configureStore } from "@reduxjs/toolkit"
import wishlistSlices from "./slices/wishlistSlices"
import cartSlices from "./slices/cartSlices"

const store = configureStore({
    reducer:{
            wishlistReducer:wishlistSlices,
            cartReducer:cartSlices
    }
})

export default store 