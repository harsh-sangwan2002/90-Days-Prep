import { useDispatch, useSelector } from 'react-redux'
import { addToWatchlist, removeFromWatchlist } from '../redux/WatchListSlice';

const Movie = ({ movie }) => {

    const watchlist = useSelector(state => state.watchList);
    const dispatch = useDispatch();

    const handleClick = () => {

        if (watchlist[movie.id]) {
            dispatch(removeFromWatchlist(movie.id));
        }

        else
            dispatch(addToWatchlist({ ...movie }));
    }

    return (
        <div className="movie">
            <img src={`https://tmdb.org/t/p/w400${movie.backdrop_path}`} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <button onClick={handleClick}>{watchlist[movie.id] ? '-' : '+'} WatchList</button>
            </div>
        </div>
    )
}

export default Movie
