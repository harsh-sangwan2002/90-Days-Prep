import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { fetchMovies } from "../redux/Movies";
import Pagination from "../components/Pagination";

let genre_ids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Darma",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western"
}

const MovieDetailsPage = () => {
    const list = useSelector(state => state.movie.movies);
    const [currPage, setCurrPage] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies(currPage));
    }, [currPage]);

    return (
        <section className="movie-details">
            <div className="content">
                <button onClick={() => navigate(-1)}>Go Back</button>
                <h1>Movie Details Page</h1>
            </div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Movie Title</th>
                        <th>Movie Overview</th>
                        <th>Popularity</th>
                        <th>Vote Count</th>
                        <td>Genres</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(movie => (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td><img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} /></td>
                                <td>{movie.title}</td>
                                <td>{movie.overview}</td>
                                <td>{movie.popularity}</td>
                                <td>{movie.vote_average}</td>
                                <td>{movie.genre_ids.map(genre => genre_ids[genre]).join(", ")}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination currPage={currPage} setCurrPage={setCurrPage} />
        </section>
    )
}

export default MovieDetailsPage
