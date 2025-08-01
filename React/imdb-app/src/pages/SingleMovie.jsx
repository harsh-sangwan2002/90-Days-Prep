import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState({})

    const fetchMovies = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3aec63790d50f3b9fc2efb4c15a8cf99`);
        const data = await res.json();
        console.log(data);
        setMovie(data);
    }

    useEffect(() => {
        fetchMovies();
    }, [id])

    return (
        <div className="movie-details">
            <div className="left-section">
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            </div>
            <div className="right-section">
                <div className="top-section">
                    <h1>{movie.original_title}</h1>
                    <p><em>{movie.tagline}</em></p>
                    <p>{movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Runtime: {movie.runtime}</p>
                    <p>Budget: {movie.budget}</p>
                    <p>Rating: {movie.vote_average}</p>
                    <p>Genres: {movie.genres && movie.genres.map(genre => genre.name).join(", ")}</p>
                </div>
                <div className="bottom-section">

                </div>
            </div>
        </div>
    )
}

export default SingleMovie
