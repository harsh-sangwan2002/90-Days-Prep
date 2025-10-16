import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const MovieListPage = ({ watchlist, setWatchlist }) => {

    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const fetchMovies = async (page) => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`);
            const data = await res.json();
            setMovies(data.results);
            setTotalPages(data.total_pages);
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
            <MovieList movies={movies} watchlist={watchlist} setWatchlist={setWatchlist} />
            <Pagination handleClick={fetchMovies} totalPages={totalPages} />
        </div>
    )
}

export default MovieListPage
