import { createSlice } from '@reduxjs/toolkit'
import toast  from 'react-hot-toast';
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
            const paste= action.payload;
            state.paste.push(paste);
            localStorage.setItem("paste", JSON.stringify(state.paste));

            toast("Paste Createded Successfully!")

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