import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:'user',
    initialState:{
        currentUser:null
    },
    reducers:{
        addUser:(state,action)=>{
            state.currentUser = action.payload
        },
        removerUser:(state,action)=>{
            return null
        }
    }
})

export const {addUser, removerUser} = userSlice.actions

export default userSlice.reducer