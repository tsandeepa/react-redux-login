import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"user",
    initialState:{value:{
        name:"Tharindu",
        age:0,
        email:""
    }},
    reducer:{
        login:(state, action)=>{
            state.value = action.payload
        },
    }
})

export default userSlice.reducer;