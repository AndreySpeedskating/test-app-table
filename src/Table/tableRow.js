import React from 'react'
import {ShowFull} from "./showFull";

let short_id = require('shortid')

export function tableRow (item, props) {
    return item.map((i, index) =>
    (i !== undefined)?<React.Fragment key={short_id.generate()}>
        <div key={short_id.generate()} className={'Row'} >
            <div key={short_id.generate()} className={'Cell'} id={'num'}>{`№ ${i.number}`}</div>
            <div key={short_id.generate()} className={'Cell'} id={'date'}>{i.date}</div>
            <div key={short_id.generate()} className={'Cell'} id={'name'}>{i.name}</div>
            <div key={short_id.generate()} className={'Cell'} id={'driver_name'}>{i.DriverName}</div>
            <div key={short_id.generate()} className={'Cell'} id={'driver_telephone'}>{i.DriverTelephone}</div>
            <div key={short_id.generate()} className={'Cell'} id={'comment'}>{i.comment}</div>
            <div key={short_id.generate()} className={'Cell'} id={'ATI'}><a href={i.ATI} target="_blank" rel='noreferrer'>{i.ATI}</a></div>
            <button key={short_id.generate()} className={'Cell'} id={index} onClick={!props.Row?props.onShowFull.bind():props.onHideFull.bind() }>{!props.Row?'Показать':'Скрыть'}</button>
            <button key={short_id.generate()} className={'Cell'} id={index} onClick={props.onDelete.bind()}>Удалить</button>
        </div>
        {props.Row === index.toString()?ShowFull(props, props.item[index], index):null}
    </React.Fragment>: null
)}