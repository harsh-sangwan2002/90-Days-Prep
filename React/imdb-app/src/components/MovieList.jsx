import { useEffect, useState } from "react"
import Movie from "./Movie";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/Movies";

const MovieList = () => {

    const movies = useSelector(state => state.movie.movies);
    const [currPage, setCurrPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies(currPage));
    }, [currPage]);

    return (
        <section className="movie-container">
            <section className="movies">
                {
                    movies.map(movie => (
                        <Movie movie={movie} key={movie.id} />
                    ))
                }
            </section>
            <Pagination currPage={currPage} setCurrPage={setCurrPage} />
        </section>
    )
}

export default MovieList
