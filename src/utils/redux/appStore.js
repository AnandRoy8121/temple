import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import eventSlice from "./eventSlice";


const appStore = configureStore({
    reducer:{
        user:userSlice,
        event:eventSlice
    }
})

export default appStore;