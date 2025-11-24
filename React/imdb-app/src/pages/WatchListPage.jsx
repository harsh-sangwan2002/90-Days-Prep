import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromWatchList } from "../redux/WatchList";

let genre_ids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Darma",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western"
}

const WatchListPage = () => {

    const [list, setList] = useState([]);
    const watchlist = useSelector(state => state.watchlist);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setList(Object.values(watchlist));
    }, [watchlist]);

    const handleRemove = (movieId) => {
        dispatch(removeFromWatchList(movieId));
    }

    const handleList = (e) => {
        const movie = e.target.value.toLowerCase();
        const filteredMovies = Object.values(watchlist).filter(m => m.title.toLowerCase().includes(movie));
        setList(filteredMovies);
    }

    const selectedGenres = () => {
        let genreList = [];
        Object.values(watchlist).forEach(movie => {
            genreList.push(...movie.genre_ids)
        })
        return [...new Set(genreList)];
    }

    const handleGenreSelection = (genreId) => {
        const newList = Object.values(watchlist).filter(movie => genreId ? movie.genre_ids.includes(genreId) : true);
        setList(newList);
    }

    return (
        <section className="watch-list">
            <div className="content">
                <button onClick={() => navigate(-1)}>Go Back</button>
                <h1>WatchList Page</h1>
            </div>
            <div className="container">
                <div className="left-section">
                    <button onClick={() => handleGenreSelection()}>All</button>
                    {
                        selectedGenres().map((genre => (
                            <button key={genre} onClick={() => handleGenreSelection(genre)}>{genre_ids[genre]}</button>
                        )))
                    }
                </div>
                <div className="right-section">
                    <input type="text" placeholder="Search" onChange={handleList} />
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Movie Title</th>
                                <th>Popularity</th>
                                <th>Vote Count</th>
                                <td>Genres</td>
                                <td>Remove</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map(movie => (
                                    <tr key={movie.id}>
                                        <td>{movie.id}</td>
                                        <td><img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} /></td>
                                        <td>{movie.title}</td>
                                        <td>{movie.popularity}</td>
                                        <td>{movie.vote_average}</td>
                                        <td>{movie.genre_ids.map(genre => genre_ids[genre]).join(", ")}</td>
                                        <td><button onClick={() => handleRemove(movie.id)}>Remove</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default WatchListPage
