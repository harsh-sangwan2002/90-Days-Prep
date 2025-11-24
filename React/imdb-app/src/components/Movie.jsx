import { useDispatch, useSelector } from "react-redux";
import { addToWatchList, removeFromWatchList } from "../redux/WatchList";

const Movie = ({ movie }) => {

    const watchlist = useSelector(state => state.watchlist);
    const dispatch = useDispatch();

    const handleWatchlist = () => {
        if (watchlist[movie.id]) {
            dispatch(removeFromWatchList(movie.id));
        }

        else
            dispatch(addToWatchList(movie));
    }

    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <section className="movie-info">
                <h3>{movie.title}</h3>
                <button onClick={handleWatchlist}>{watchlist[movie.id] ? "- " : "+"} Watchlist</button>
            </section>
        </div>
    )
}

export default Movie
