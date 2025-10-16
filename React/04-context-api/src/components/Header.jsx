import { useContext } from 'react'
import { WatchListContext } from '../context/WatchListContext'

const Header = () => {

    const watchListContext = useContext(WatchListContext);
    console.log(watchListContext);
    return (
        <div>
            <h1>I am Header Component</h1>
        </div>
    )
}

export default Header
