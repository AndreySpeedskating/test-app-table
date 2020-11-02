import React from 'react'
import './input.css'
import {inputsValue} from "../function/function";


export const input = (props, Validation) => {
    return (
        <div className={'inputContainer'}>
            <span><input type="text" className={'input'} autoComplete={'off'} id={'name'} onInput={Validation}/>Клиент</span>
            <span><input type="text" className={'input'} autoComplete={'off'} id={'DriverName'} onInput={Validation}/>Имя водителя</span>
            <span><input type="tel" className={'input'} autoComplete={'off'} id={'DriverTelephone'} onInput={Validation}/>Телефон водителя</span>
            <span><input type="text" className={'input'} autoComplete={'off'} id={'comment'} onInput={Validation}/>Комментарий</span>
            <span><input type="url" className={'input'} autoComplete={'off'} id={'ATI'} onInput={Validation}/>АТИ</span>
            <span><input type="text" className={'input'} autoComplete={'off'} id={'From'} onInput={Validation}/>Адрес отправления</span>
            <span><input type="text" className={'input'} autoComplete={'off'} id={'To'} onInput={Validation}/>Адрес доставки</span>
            <button className={'button'} onClick={props.onAdd.bind(this, inputsValue.bind(this, 'input', props))} id={'Add'}>Создать Заявку</button>
            <button className={'button'} onClick={props.onClose.bind(this)}>Закрыть</button>
        </div>
    )
}
