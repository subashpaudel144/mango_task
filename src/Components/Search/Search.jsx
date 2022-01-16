import React from 'react'
import './Search.scss'

function Search() {
    return (
        <div className='search'>
            <input type="text" placeholder='What can we help you with?' />
            <button type='search'>SEARCH</button>
        </div>
    )
}

export default Search;
