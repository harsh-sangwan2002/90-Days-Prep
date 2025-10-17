import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { setMovies, setTotalPages } from "../redux/MovieListSlice";

const MovieListPage = () => {

    const totalPages = useSelector(state => state.movieList.totalPages);
    const dispatch = useDispatch();

    const fetchMovies = async (page) => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`);
            const data = await res.json();
            dispatch(setMovies(data.results));
            dispatch(setTotalPages(data.total_pages));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchMovies(1);
    }, [])

    return (
        <div className="movie-list-page">
            <h1>Movie List Page</h1>
            <MovieList />
            <Pagination handleClick={fetchMovies} totalPages={totalPages} />
        </div>
    )
}

export default MovieListPage
