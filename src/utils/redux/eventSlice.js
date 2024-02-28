import { createSlice } from "@reduxjs/toolkit"


const eventSlice = createSlice({
    name:'event',
    initialState:{
        allEvents:[]
    },
    reducers:{
        allTheEvents:(state,action)=>{
            state.allEvents = action.payload
        }
    }
})

export const {allTheEvents} = eventSlice.actions

export default eventSlice.reducer