import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
export const watchListSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
        setWatchlist: (state, action) => {
            state[action.payload.id] = action.payload;
        },
        removeFromWatchList: (state, action) => {
            delete state[action.payload];
        }
    }
})

export const { setWatchlist, removeFromWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;