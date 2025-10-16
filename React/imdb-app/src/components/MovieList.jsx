import Movie from './Movie'

const MovieList = ({ movies }) => {

    return (
        <div className='movies'>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList
