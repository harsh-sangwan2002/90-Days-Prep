import React from 'react'

const MovieCard = ({ movie, watchlist, setWatchlist }) => {

    const handleClick = () => {

        if (watchlist[movie.id]) {
            // Movie already in watchlist, remove it
            const updatedWatchlist = { ...watchlist };
            delete updatedWatchlist[movie.id];
            setWatchlist(updatedWatchlist);
        } else {
            // Movie not in watchlist, add it
            setWatchlist({ ...watchlist, [movie.id]: movie });
        }
    }

    return (
        <div className='movie'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
            <h2>{movie.original_title}</h2>
            <button onClick={handleClick}>{watchlist[movie.id] ? "-" : "+"} Add to WatchList</button>
        </div>
    )
}

export default MovieCard
