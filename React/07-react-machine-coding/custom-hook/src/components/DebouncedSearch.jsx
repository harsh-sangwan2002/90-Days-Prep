import { useState } from "react"
import useDebounce from "../hooks/useDebounce";

const DebouncedSearch = () => {

    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);

    return (
        <div>
            <input type="text" placeholder="Type to search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <p>Typed value : {search}</p>
            <p>Debounced value : {debouncedSearch}</p>
        </div>
    )
}

export default DebouncedSearch
