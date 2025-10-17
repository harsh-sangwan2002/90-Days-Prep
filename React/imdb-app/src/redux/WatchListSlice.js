import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const watchListSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        addToWatchlist: (state, action) => {
            state[action.payload.id] = action.payload;
        },
        removeFromWatchlist: (state, action) => {
            delete state[action.payload];
        }
    }
})

export const { addToWatchlist, removeFromWatchlist } = watchListSlice.actions;
export default watchListSlice.reducer;