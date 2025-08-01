import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWatchList, setWatchlist } from '../redux/WatchListSlice';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {

    const watchlist = useSelector(state => state.watchlist);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleMovie = () => {
        // Navigate to the movie detail page with the movie ID
        navigate(`/movie/${movie.id}`);
    }

    const handleClick = () => {

        if (watchlist[movie.id]) {
            // Movie already in watchlist, remove it
            dispatch(removeFromWatchList(movie.id));
        } else {
            // Movie not in watchlist, add it
            dispatch(setWatchlist({ ...movie }));
        }
    }

    return (
        <div className='movie' onClick={handleMovie}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
            <h2>{movie.original_title}</h2>
            <button onClick={handleClick}>{watchlist[movie.id] ? "-" : "+"} Add to WatchList</button>
        </div>
    )
}

export default MovieCard
