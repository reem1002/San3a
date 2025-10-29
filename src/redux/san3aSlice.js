import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    whatsappNumber: "201040374684",
};

const san3aSlice = createSlice({
    name: "san3a",
    initialState,
    reducers: {

        setWhatsappNumber: (state, action) => {
            state.whatsappNumber = action.payload;
        },
    },
});

export const { setWhatsappNumber } = san3aSlice.actions;
export default san3aSlice.reducer;
