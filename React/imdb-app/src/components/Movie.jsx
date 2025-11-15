import { useContext } from "react";
import { WatchListContext } from "../context/WatchlistContext";

const Movie = ({ movie }) => {

    const { watchlist, setWatchlist } = useContext(WatchListContext);

    const handleWatchlist = () => {
        if (watchlist[movie.id]) {
            const obj = watchlist;
            delete obj[movie.id];
            setWatchlist(obj);
        }

        else
            setWatchlist({ ...watchlist, [movie.id]: movie })
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
