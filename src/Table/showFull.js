import React from "react";

let GetData = (className) => {
    let array = Array.from(document.getElementsByClassName(className))
    let result = array.every(i => i.value !== '')
    return (!!result)?
        {   number: array[0].innerHTML,
            date: array[1].innerHTML,
            name: array[2].innerHTML,
            DriverName: array[3].innerHTML,
            DriverTelephone: array[4].innerHTML,
            comment: array[5].innerHTML,
            ATI: array[6].innerHTML,
            from: array[7].innerHTML,
            to: array[8].innerHTML
        } : null
}

let short_id = require('shortid')

export const ShowFull = (props, item, index) => {
    return (
        <div key={short_id.generate()} className={'Row Full'} >
            <span>
                <div key={short_id.generate()} className={'Cell Full'} suppressContentEditableWarning={true}
                       contentEditable={props.Editable === 'numberFull'? 'true' : 'false'}
                       onClick={props.onGetEditable.bind()} id={'numberFull'}>{item.number}</div>Номер Заявки</span>
            <span>
                <div key={short_id.generate()} className={'Cell Full'} suppressContentEditableWarning={true}
                       contentEditable={props.Editable === 'dateFull'? 'true' : 'false'}
                       onClick={props.onGetEditable.bind()} id={'dateFull'}>{item.date}</div>Дата Заявки</span>
            <span>
                <div key={short_id.generate()} className={'Cell Full'} suppressContentEditableWarning={true}
                     contentEditable={props.Editable === 'nameFull' ? 'true' : 'false'}
                     onClick={props.onGetEditable.bind()} id={'nameFull'}>{item.name}</div>Имя клиента</span>
            <span>
                <div key={short_id.generate()} className={'Cell Full'} suppressContentEditableWarning={true}
                     contentEditable={props.Editable === 'driverNameFull' ? 'true' : 'false'}
                     onClick={props.onGetEditable.bind()} id={'driverNameFull'}>
                    {item.DriverName}</div>Имя Водителя</span>
            <span>
                <div key={short_id.generate()} className={'Cell Full'} suppressContentEditableWarning={true}
                     contentEditable={props.Editable === 'driverTelephoneFull' ? 'true' : 'false'}
                     onClick={props.onGetEditable.bind()} id={'driverTelephoneFull'}>{item.DriverTelephone}</div>Телефон Водителя
            </span>
            <span>
                <div key={short_id.generate()} className={'Cell Full'} suppressContentEditableWarning={true}
                     contentEditable={props.Editable === 'commentFull' ? 'true' : 'false'}
                     onClick={props.onGetEditable.bind()} id={'commentFull'}>{item.comment}</div>Комментарий
            </span>
            <span>
                <div key={short_id.generate()} className={'Cell Full'} suppressContentEditableWarning={true}
                     contentEditable={props.Editable === 'ATIFull' ? 'true' : 'false'}
                     onClick={props.onGetEditable.bind()} id={'ATIFull'}>{item.ATI}</div>АТИ
            </span>
            <span>
                <div key={short_id.generate()} className={'Cell Full'} suppressContentEditableWarning={true}
                     contentEditable={props.Editable === 'FromFull' ? 'true' : 'false'}
                     onClick={props.onGetEditable.bind()} id={'FromFull'}>{item.from}</div>Адрес отправления
            </span>
            <span>
                <div key={short_id.generate()} className={'Cell Full'} suppressContentEditableWarning={true}
                     contentEditable={props.Editable === 'ToFull' ? 'true' : 'false'}
                     onClick={props.onGetEditable.bind()} id={'ToFull'}>{item.to}</div>Адрес доставки
            </span>
            <button key={short_id.generate()} className={'Cell'} onClick={props.onSaveChanges.bind(this, GetData.bind(this, 'Cell Full', props), index)}>Сохранить</button>
        </div>
    )
}