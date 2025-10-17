import { useSelector } from 'react-redux'
import Movie from './Movie'

const MovieList = () => {

    const movies = useSelector(state => state.movieList.movies);

    return (
        <div className='movies'>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList
