import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter";
import watchListReducer from "./WatchList";
import movieReducer from "./Movies";

const store = configureStore({
    reducer: {
        // counter: counterReducer,
        watchlist: watchListReducer,
        movie: movieReducer,
    },
});

export default store;