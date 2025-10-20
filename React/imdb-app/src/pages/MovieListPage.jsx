import { useEffect, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { fetchMovies } from "../redux/MovieListSlice";

const MovieListPage = () => {
    const dispatch = useDispatch();

    const totalPages = useSelector(state => state.movieList.totalPages);

    const handlePageChange = useCallback((pageNo) => {
        dispatch(fetchMovies(pageNo));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchMovies(1));
    }, [dispatch]);

    return (
        <div className="movie-list-page">
            <h1>Movie List Page</h1>
            <MovieList />
            <Pagination handleClick={handlePageChange} totalPages={totalPages} />
        </div>
    );
};

export default MovieListPage;
