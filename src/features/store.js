import { configureStore } from "@reduxjs/toolkit"
import fruitReducer from "./fruits/fruitSlice"
import cartReducer from "./fruits/cartSlice"


const store = configureStore({
    reducer:{

        fruits : fruitReducer,
        cart : cartReducer
       

    }
})

export default store
