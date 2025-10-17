import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { fetchMovies } from "../redux/MovieListSlice";

const MovieListPage = () => {

    const totalPages = useSelector(state => state.movieList.totalPages);
    const dispatch = useDispatch();

    const handlePageChange = (pageNo) => {
        dispatch(fetchMovies(pageNo));
    }

    useEffect(() => {
        dispatch(fetchMovies(1));
    }, [])

    return (
        <div className="movie-list-page">
            <h1>Movie List Page</h1>
            <MovieList />
            <Pagination handleClick={handlePageChange} totalPages={totalPages} />
        </div>
    )
}

export default MovieListPage
