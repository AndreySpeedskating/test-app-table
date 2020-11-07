import React from 'react'
import './search.css'
import {SearchValue} from '../function/function'

let short_id = require('shortid')



export const Search = (props) => {
    return (
        <div className={'SearchHead'} key={short_id.generate()}>
            <button key={short_id.generate()} className={'search'} onClick={props.onSearch.bind(this, SearchValue.bind(this, 'searchInput'))}>{(props.search === false)?'Поиск':'Сброс'}</button>
            <input key={short_id.generate()} className={'search'} id={'searchInput'}
                   type="text" autoComplete={'off'} onInput={() => props.onSearch.bind(SearchValue.bind(this, 'searchInput'))}
            />
        </div>
    )
}