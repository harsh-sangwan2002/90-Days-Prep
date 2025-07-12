import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import watchlistReducer from "./WatchListSlice";
import movieReducer from "./MovieSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        watchlist: watchlistReducer,
        movie: movieReducer,
    },
});