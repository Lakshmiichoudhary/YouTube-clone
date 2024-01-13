import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        isMenuTriger: true
    },
    reducers:{
        menuToggle : (state) => {
            state.isMenuTriger = !state.isMenuTriger
        },
        closeMenu:(state) => {
            state.isMenuTriger = false;
        }
    }

})

export const {menuToggle, closeMenu} = appSlice.actions 

export default appSlice.reducer