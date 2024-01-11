import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        isMenuTriger: true
    },
    reducers:{
        menuToggle : (state) => {
            state.isMenuTriger = !state.isMenuTriger
        }
    }
})

export const {menuToggle} = appSlice.actions 

export default appSlice.reducer