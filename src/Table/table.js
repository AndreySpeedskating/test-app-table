import React from 'react';
import './table.css';
import {ShowFull} from "./showFull"
import _ from 'lodash'

let short_id = require('shortid')

export const table  = (props, Show, Delete)=> {
    let sort = props.SortType === 'asc'? String.fromCodePoint(0x2191): String.fromCodePoint(0x2193)
    let SearchClone = props.item.map((i)=> {
        if (i.number.toLowerCase().match(props.search) || i.date.toLowerCase().match(props.search) || i.name.toLowerCase().match(props.search)
            || i.DriverName.toLowerCase().match(props.search) || i.DriverTelephone.toLowerCase().match(props.search)
            || i.comment.toLowerCase().match(props.search) || i.ATI.toLowerCase().match(props.search) || i.from.toLowerCase().match(props.search)
            || i.to.toLowerCase().match(props.search)) {return i} else {return undefined}
    })
    let CloneState = (props.search === false)?
        _.chunk(_.orderBy((props.item.length<1)?[undefined]:props.item, props.SortField, props.SortType), 20) :
        _.chunk(_.orderBy(SearchClone, props.SortField, props.SortType), props.item.length)
    console.log(CloneState)
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
            {CloneState[props.currentPage].map((i, index) =>
                (i !== undefined)?<React.Fragment key={short_id.generate()}>
                <div key={short_id.generate()} className={'Row'} >
                <div key={short_id.generate()} className={'Cell'} id={'num'}>{`№ ${i.number}`}</div>
                <div key={short_id.generate()} className={'Cell'} id={'date'}>{i.date}</div>
                <div key={short_id.generate()} className={'Cell'} id={'name'}>{i.name}</div>
                <div key={short_id.generate()} className={'Cell'} id={'driver_name'}>{i.DriverName}</div>
                <div key={short_id.generate()} className={'Cell'} id={'driver_telephone'}>{i.DriverTelephone}</div>
                <div key={short_id.generate()} className={'Cell'} id={'comment'}>{i.comment}</div>
                <div key={short_id.generate()} className={'Cell'} id={'ATI'}><a href={i.ATI} target="_blank" rel='noreferrer'>{i.ATI}</a></div>
                <button key={short_id.generate()} className={'Cell'} id={index} onClick={!props.Row?Show:props.onHideFull.bind() }>{!props.Row?'Показать':'Скрыть'}</button>
                <button key={short_id.generate()} className={'Cell'} id={index} onClick={Delete}>Удалить</button>
                </div>
                 {props.Row === index.toString()?ShowFull(props, props.item[index], index):null}
             </React.Fragment>: null
             )}
        </div>
    )}


