import React from 'react';
import './table.css';
import _ from 'lodash'
import {search} from "../function/function";
import {tableRow} from "./tableRow";
import {tableHead} from "./tableHead";

let short_id = require('shortid')

export const table  = (props)=> {
    let SearchClone = props.item.map((i) => search(i, props))
    let CloneState = (props.search === false)?
        _.chunk(_.orderBy((props.item.length<1)?[undefined]:props.item, props.SortField, props.SortType), props.pageSize) :
        _.chunk(_.orderBy(SearchClone, props.SortField, props.SortType), props.item.length)
    return (
        <div key={short_id.generate()} className={'Table'}>
            {tableHead(props)}
            {tableRow(CloneState[props.currentPage],props)}
        </div>
    )
}