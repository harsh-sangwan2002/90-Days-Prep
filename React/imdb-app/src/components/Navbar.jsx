import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/"><h1>IMDB App</h1></Link>
            <ul>
                <li><Link to="/">Movies</Link></li>
                <li><Link to="/details">Detail</Link></li>
                <li><Link to="/watchlist">WatchList</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
