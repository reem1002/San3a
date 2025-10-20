import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const product = action.payload;
            const exists = state.favorites.find((item) => item.id === product.id);
            if (exists) {

                state.favorites = state.favorites.filter((item) => item.id !== product.id);
            } else {

                state.favorites.push(product);
            }
        },
        clearFavorites: (state) => {
            state.favorites = [];
        },
    },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
