import MovieList from "../components/MovieList"

const MovieListPage = ({ watchlist, setWatchlist }) => {
    return (
        <section className="movie-list">
            <h1>Movie List Page</h1>
            <MovieList watchlist={watchlist} setWatchlist={setWatchlist} />
        </section>
    )
}

export default MovieListPage
