import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    paste: localStorage.getItem("paste")
        ? JSON.parse(localStorage.getItem("paste"))
        : []
}

export const pasteSlice = createSlice({
    name: 'Paste',
    initialState,
    reducers: {
        addToPaste: (state, action) => {
        },
        updateToPaste: (state, action) => {
        },
        resetFromPaste: (state, action) => {
        },
        removeFromPaste: (state, action) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetFromPaste, removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer