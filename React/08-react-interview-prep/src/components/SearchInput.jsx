import React from 'react'
import SearchBox from './SearchBox'

const SearchInput = () => {

    const searchItems = ["USA", "Canada", "Mexico", "Germany", "France", "Italy", "Algeria", "Australia", "India", "China", "Japan"]
    return (
        <div>
            <SearchBox searchItems={searchItems} />
        </div>
    )
}

export default SearchInput
