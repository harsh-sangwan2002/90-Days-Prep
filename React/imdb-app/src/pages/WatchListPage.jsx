import { useState } from "react"

const genreIds = {
    0: "All",
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

const WatchListPage = ({ watchlist, setWatchlist }) => {

    const [list, setList] = useState(Object.values(watchlist));

    const handleChange = (e) => {

        if (e.target.value === "")
            setList(Object.values(watchlist));

        else {
            const newList = Object.values(watchlist).filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setList(newList);
        }

    }

    const selectedGenres = () => {
        const genres = [0];

        Object.values(watchlist).forEach(movie => {
            genres.push(...movie.genre_ids);
        });

        return [...new Set(genres)];
    }

    const handleGenreChange = (id) => {

        if (id === 0) {
            setList(Object.values(watchlist));
            return;
        }
        const newList = Object.values(watchlist).filter(movie => movie.genre_ids.includes(id));
        setList(newList);
    }

    const handlePopularityAsc = () => {
        const newList = [...list];
        newList.sort((a, b) => a.popularity - b.popularity);
        setList(newList);
    }

    const handlePopularityDesc = () => {
        const newList = [...list];
        newList.sort((a, b) => b.popularity - a.popularity);
        setList(newList);
    }

    const handleVoteAverageAsc = () => {
        const newList = [...list];
        newList.sort((a, b) => a.vote_average - b.vote_average);
        setList(newList);
    }

    const handleVoteAverageDesc = () => {
        const newList = [...list];
        newList.sort((a, b) => b.vote_average - a.vote_average);
        setList(newList);
    }

    const handleReleaseDateAsc = () => {
        const newList = [...list];
        newList.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
        setList(newList);
    }

    const handleReleaseDateDesc = () => {
        const newList = [...list];
        newList.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        setList(newList);
    }

    return (
        <section className="watchlist-page">
            <h1> Watch List Page</h1>
            <div className="container">
                <div className="left-section">
                    <div className="genres">
                        {
                            selectedGenres().map(id => (
                                <button className="genre" key={id} onClick={() => handleGenreChange(id)}>{genreIds[id]}</button>
                            ))
                        }
                    </div>
                </div>
                <div className="right-section">
                    <input type="text" placeholder="Search" onChange={handleChange} />
                    <table border={1}>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Image</td>
                                <td>Movie Title</td>
                                <td>Genres</td>
                                <td><i onClick={handlePopularityDesc}>⬆️</i> Populaity <i onClick={handlePopularityAsc}>⬇️</i></td>
                                <td><i onClick={handleVoteAverageDesc}>⬆️</i> Vote Average <i onClick={handleVoteAverageAsc}>⬇️</i></td>
                                <td><i onClick={handleReleaseDateDesc}>⬆️</i> Release Date <i onClick={handleReleaseDateAsc}>⬇️</i></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map(movie => (
                                    <tr key={movie.id}>
                                        <td>{movie.id}</td>
                                        <td><img src={`https://tmdb.org/t/p/w200${movie.backdrop_path}`} alt={movie.title} /></td>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre_ids.map(id => genreIds[id]).join(", ")}</td>
                                        <td>{movie.popularity}</td>
                                        <td>{movie.vote_average}</td>
                                        <td>{movie.release_date}</td>
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
