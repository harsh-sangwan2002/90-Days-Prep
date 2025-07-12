import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    pages: [1, 2, 3, 4, 5, 6, 7, 8],
    currPage: 1,
}

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setPages: (state, action) => {
            state.pages = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currPage = action.payload;
        }
    }
})

export const { setMovies, setPages, setCurrentPage } = movieSlice.actions;
export default movieSlice.reducer;