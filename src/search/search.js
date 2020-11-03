import React from 'react'
import './search.css'

let short_id = require('shortid')

function SearchValue (className) {
    let value = document.getElementById(className).value
     if (value !== null) return value
}

export const Search = (props) => {
    return (
        <div className={'SearchHead'} key={short_id.generate()}>
            <button key={short_id.generate()} className={'search'} onClick={props.onSearch.bind(this, SearchValue.bind(this, 'searchInput'))}>{(props.search === false)?'Поиск':'Сброс'}</button>
            <input key={short_id.generate()} className={'search'} id={'searchInput'}
                   type="text" autoComplete={'off'} onInput={event => event.preventDefault}
            />
        </div>
    )
}