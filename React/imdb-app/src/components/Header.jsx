import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="navbar">
            <h1 className="logo"><Link to="/">IMDB App</Link></h1>
            <ul>
                <li><Link to="/">Movies</Link></li>
                <li><Link to="/details">Details</Link></li>
                <li><Link to="/watchlist">Watchlist</Link></li>
            </ul>
        </header>
    )
}

export default Header
