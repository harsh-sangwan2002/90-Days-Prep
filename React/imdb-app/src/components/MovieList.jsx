import { useEffect, useState } from "react"
import Movie from "./Movie";
import Pagination from "./Pagination";

const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const fetchMovies = async (page) => {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`);
        const data = await res.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
    }

    useEffect(() => {
        fetchMovies(currPage);
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
            <Pagination currPage={currPage} setCurrPage={setCurrPage} totalPages={totalPages} />
        </section>
    )
}

export default MovieList
