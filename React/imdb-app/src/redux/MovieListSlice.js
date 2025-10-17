import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    totalPages: 0,
};

const movieListSlice = createSlice({
    name: "movieList",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        }
    },
})

export const { setMovies, setTotalPages } = movieListSlice.actions;
export default movieListSlice.reducer;