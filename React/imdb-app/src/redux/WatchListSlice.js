import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("watchlist")) || {};
export const watchListSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
        setWatchlist: (state, action) => {
            state[action.payload.id] = action.payload;
            localStorage.setItem("watchlist", JSON.stringify(state));
        },
        removeFromWatchList: (state, action) => {
            delete state[action.payload];
            localStorage.setItem("watchlist", JSON.stringify(state));
        }
    }
})

export const { setWatchlist, removeFromWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;