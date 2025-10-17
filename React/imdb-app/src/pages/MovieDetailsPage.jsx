import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies } from "../redux/MovieListSlice";
import Pagination from "../components/Pagination";

const genreIds = {
    0: "All",
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
}

const MovieDetailsPage = () => {

    const movies = useSelector(state => state.movieList.movies);
    console.log(movies);
    const totalPages = useSelector(state => state.movieList.totalPages);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePageChange = (pageNo) => {
        dispatch(fetchMovies(pageNo));
    }

    useEffect(() => {
        dispatch(fetchMovies(1));
    }, [])


    const handleGoBack = () => {
        navigate('/');
    }

    return (
        <div className="movie-details-page">
            <div className="top-section">
                <button onClick={handleGoBack}>⬅️ Go Back</button>
                <h1> Movie Details Page</h1>
            </div>
            <div className="bottom-section">
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Image</td>
                            <td>Movie Title</td>
                            <td>Movie Overview</td>
                            <td>Genres</td>
                            <td>Popularity</td>
                            <td>Vote Average</td>
                            <td>Release Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(movie => (
                                <tr key={movie.id}>
                                    <td>{movie.id}</td>
                                    <td><img src={`https://tmdb.org/t/p/w200${movie.backdrop_path}`} alt={movie.title} /></td>
                                    <td>{movie.title}</td>
                                    <td>{movie.overview}</td>
                                    <td>{movie.genre_ids.map(id => genreIds[id]).join(", ")}</td>
                                    <td>{movie.popularity}</td>
                                    <td>{movie.vote_average}</td>
                                    <td>{movie.release_date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Pagination handleClick={handlePageChange} totalPages={totalPages} />
            </div>
        </div>
    )
}

export default MovieDetailsPage
