import {configureStore} from "@reduxjs/toolkit"
import firstReducer from "./reducer";

const store = configureStore({
    reducer:{
        cart:firstReducer,
    }
})

export default store;