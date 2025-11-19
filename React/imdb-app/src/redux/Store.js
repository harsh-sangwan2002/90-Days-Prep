import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter";
import watchListReducer from "./WatchList";

const store = configureStore({
    reducer: {
        // counter: counterReducer,
        watchlist: watchListReducer,
    },
});

export default store;