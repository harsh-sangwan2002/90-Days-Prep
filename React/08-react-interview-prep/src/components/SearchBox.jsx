import { useState } from 'react'

const SearchBox = ({ searchItems }) => {

    const [items, setItems] = useState([]);

    const handleSearch = (e) => {

        const currItem = e.target.value;

        if (currItem === "") {
            setItems([]);
            return;
        }

        const filteredItems = searchItems.filter(item => item.toLowerCase().includes(currItem.toLowerCase())).slice(0, 4);
        setItems(filteredItems);
    }

    const debouncedFn = (fn, delay) => {

        let timer;

        return function (...args) {

            clearTimeout(timer);

            timer = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    }

    const handleSearchDebounced = debouncedFn(handleSearch, 1000);

    return (
        <div>
            <input type="text" placeholder='Enter a country name' onChange={handleSearchDebounced} />
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}


export default SearchBox
