import React from 'react'
import './search.css'

let short_id = require('shortid')

let SearchValue = (className) => {
    let value = document.getElementById(className).value
     if (value !== null) return value
}

export const Search = (props) => {
    return (
        <div className={'SearchHead'} key={short_id.generate()}>
            <button key={short_id.generate()} className={'search'} onClick={props.onSearch.bind(this, SearchValue.bind(this, 'searchInput'))}>Поиск</button>
            <input key={short_id.generate()} className={'search'} id={'searchInput'}
                   type="text" onInput={props.onSearchValue.bind(this, SearchValue.bind(this, 'searchInput'))}
                   autoComplete={'off'}
            />
        </div>
    )
}