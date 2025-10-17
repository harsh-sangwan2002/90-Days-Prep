import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "./WatchListSlice";
import movieListReducer from "./MovieListSlice";

const store = configureStore({
    reducer: {
        watchList: watchListReducer,
        movieList: movieListReducer,
    }
});

export default store;