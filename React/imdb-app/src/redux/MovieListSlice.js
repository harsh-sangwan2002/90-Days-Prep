import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    totalPages: 0,
    activePage: 1,
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
        },
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        },
    },
})

export const fetchMovies = (pageNo) => async (dispatch) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`);
        const data = await res.json();
        dispatch(setMovies(data.results));
        dispatch(setTotalPages(data.total_pages));
        dispatch(setActivePage(pageNo));
    } catch (err) {
        console.log(err);
    }
}

export const { setMovies, setTotalPages, setActivePage } = movieListSlice.actions;
export default movieListSlice.reducer;