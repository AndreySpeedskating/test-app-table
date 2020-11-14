import React from 'react'

let short_id = require('shortid')

export function tableHead (props) {
    let sort = props.SortType === 'asc'? String.fromCodePoint(0x2191): String.fromCodePoint(0x2193)
    return (
        <div key={short_id.generate()} className={'Row Head'}>
            <div key={short_id.generate()} className={'Cell'} id={'num'} onClick={props.onSort.bind(this, 'number')}>№{sort}</div>
            <div key={short_id.generate()} className={'Cell'} id={'date'} onClick={props.onSort.bind(this, 'date')}>Дата</div>
            <div key={short_id.generate()} className={'Cell'} id={'name'} onClick={props.onSort.bind(this, 'name')}>Клиент</div>
            <div key={short_id.generate()} className={'Cell'} id={'driver_name'} onClick={props.onSort.bind(this, 'DriverName')}>Имя водителя</div>
            <div key={short_id.generate()} className={'Cell'} id={'driver_telephone'} onClick={props.onSort.bind(this, 'DriverTelephone')}>Телефон водителя</div>
            <div key={short_id.generate()} className={'Cell'} id={'comment'} onClick={props.onSort.bind(this, 'comment')}>Комментарий</div>
            <div key={short_id.generate()} className={'Cell'} id={'ATI'} onClick={props.onSort.bind(this, 'ATI')}>ATI</div>
            <div key={short_id.generate()} className={'Cell'} id={'empty'}/>
        </div>
    )
}