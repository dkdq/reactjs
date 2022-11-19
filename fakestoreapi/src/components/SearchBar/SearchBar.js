import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('')
    
    const showDisplayButton = searchValue.length > 0;

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue = ''
    }

    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} placeholder="Search.."/>
            {showDisplayButton && <button onClick={handleClearClick}>Clear</button>}
            <ul>
                {filteredProducts.map((product) => {
                    return <li key={product}>{product}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchBar;