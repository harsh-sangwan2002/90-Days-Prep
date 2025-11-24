import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    totalPages: 0,
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload;
        },
        setTotalPages(state, action) {
            state.totalPages = action.payload;
        },
    },
});

export const fetchMovies = (page) => async (dispatch) => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`);
    const data = await res.json();
    dispatch(setMovies(data.results));
    dispatch(setTotalPages(data.total_pages));
}

export const { setMovies, setTotalPages } = moviesSlice.actions;
export default moviesSlice.reducer;