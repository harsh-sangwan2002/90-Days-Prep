import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("watchlist")) || {};

const watchListSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
        addToWatchList: (state, action) => {
            const movie = action.payload;
            state[movie.id] = movie;
            localStorage.setItem("watchlist", JSON.stringify(state));
        },
        removeFromWatchList: (state, action) => {
            const movieId = action.payload;
            delete state[movieId];
            localStorage.setItem("watchlist", JSON.stringify(state));
        },
    },
});

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;