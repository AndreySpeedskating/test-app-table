import React from 'react'
import './input.css'
import {inputsValue} from "../function/function";
import {Button} from "../button/button";


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
            {Button(() => props.onAdd(() => inputsValue('input', props)), 'button', 'Создать заявку', 'Add')}
            {Button(() => props.onClose(), 'button', 'Закрыть')}
        </div>
    )
}
