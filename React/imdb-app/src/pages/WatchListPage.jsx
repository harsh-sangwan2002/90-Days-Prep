import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWatchList } from '../redux/WatchListSlice';

const WatchListPage = () => {

    const navigate = useNavigate();
    let genreIds = {
        1: "All Genres",
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    }

    const [list, setList] = useState([]);
    const watchlist = useSelector(store => store.watchlist);
    const dispatch = useDispatch();

    const selectedGenres = () => {

        let tempGenreList = [1];

        Object.values(watchlist).forEach(movie => {
            tempGenreList = tempGenreList.concat(movie.genre_ids);
        })

        console.log(tempGenreList);
        return [...new Set(tempGenreList)];
    }

    const handleGenreChange = (genreId) => {

        if (genreId == 1) {
            setList(Object.values(watchlist));
            return;
        }

        const filteredList = Object.values(watchlist).filter(movie => movie.genre_ids.includes(genreId));
        setList([...filteredList]);
    }

    const handleSearch = (e) => {
        const filteredList = Object.values(watchlist).filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setList([...filteredList]);
        console.log(list);
    }

    const handleRemove = (movieId) => {
        dispatch(removeFromWatchList(movieId));
    }

    useEffect(() => {
        setList(Object.values(watchlist));
    }, [watchlist])

    return (
        <div className='watchlist-page'>
            <div className="watchlist-header">
                <button onClick={() => navigate(-1)}>Go Back</button>
                <h1>WatchList Page</h1>
            </div>
            <div className='watchlist-container'>
                <div className='left-section'>
                    <div className='genre-list'>
                        {
                            selectedGenres().map(genreId => (
                                <div onClick={() => handleGenreChange(genreId)} className='genre'>{genreIds[genreId]}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="right-section">
                    <input onChange={handleSearch} type="text" placeholder='Search for a movie...' />
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Movie Title</th>
                                <th>Genres</th>
                                <th>Popularity</th>
                                <th>Vote Count</th>
                                <th>Edit Movie</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.values(list).map((movie) => {
                                    return (
                                        <tr key={movie.id}>
                                            <td>{movie.id}</td>
                                            <td><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} /></td>
                                            <td>{movie.title}</td>
                                            <td>{movie.genre_ids.map(genre => genreIds[genre]).join(", ")}</td>
                                            <td>{movie.popularity}</td>
                                            <td>{movie.vote_count}</td>
                                            <td><button onClick={() => handleRemove(movie.id)}>Remove</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WatchListPage
