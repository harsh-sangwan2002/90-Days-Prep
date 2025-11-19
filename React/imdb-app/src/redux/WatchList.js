import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const watchListSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
        addToWatchList: (state, action) => {
            const movie = action.payload;
            state[movie.id] = movie;
        },
        removeFromWatchList: (state, action) => {
            const movieId = action.payload;
            delete state[movieId];
        },
    },
});

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;