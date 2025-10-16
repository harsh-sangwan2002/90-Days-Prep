import Movie from './Movie'

const MovieList = ({ movies, watchlist, setWatchlist }) => {
    return (
        <div className='movies'>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} watchlist={watchlist} setWatchlist={setWatchlist} />
            ))}
        </div>
    )
}

export default MovieList
