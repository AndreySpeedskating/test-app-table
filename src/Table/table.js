import React from 'react';
import './table.css';
import _ from 'lodash'
import {search} from "../function/function";
import {tableRow} from "./tableRow";

let short_id = require('shortid')

export const table  = (props)=> {
    let sort = props.SortType === 'asc'? String.fromCodePoint(0x2191): String.fromCodePoint(0x2193)
    let SearchClone = props.item.map((i) => search(i, props))
    let CloneState = (props.search === false)?
        _.chunk(_.orderBy((props.item.length<1)?[undefined]:props.item, props.SortField, props.SortType), props.pageSize) :
        _.chunk(_.orderBy(SearchClone, props.SortField, props.SortType), props.item.length)
    return (
        <div key={short_id.generate()} className={'Table'}>
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
            {tableRow(CloneState[props.currentPage],props)}
        </div>
    )}