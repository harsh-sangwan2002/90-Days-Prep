const Movie = ({ movie, watchlist, setWatchlist }) => {

    const handleClick = () => {

        if (watchlist[movie.id]) {
            const newWatchlist = { ...watchlist };
            delete newWatchlist[movie.id];
            setWatchlist(newWatchlist);
        }

        else
            setWatchlist({ ...watchlist, [movie.id]: movie });
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
