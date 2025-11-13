const Movie = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <section className="movie-info">
                <h3>{movie.title}</h3>
                <button>+ Watchlist</button>
            </section>
        </div>
    )
}

export default Movie
