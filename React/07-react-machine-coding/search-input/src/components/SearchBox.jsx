import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchBox = ({ items }) => {

    const [list, setList] = useState([]);

    const handleChange = (e) => {
        console.log("Handle Change Called");
        const currItem = e.target.value;

        if (currItem.trim() === "") {
            setList([]);
            return;
        }

        const filteredItems = items.filter((item) =>
            item.toLowerCase().includes(currItem.toLowerCase())
        );
        setList(filteredItems);
    }
    const debouncedHandleChange = useDebounce(handleChange, 2000);

    return (
        <div>
            <input onChange={debouncedHandleChange} type="text" placeholder="Search a country..." style={{ padding: '0.5rem' }} />
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchBox
