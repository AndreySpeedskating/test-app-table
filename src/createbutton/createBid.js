import React from 'react'
import './createButton.css'

export const CreateButton = (props) => {
    return (
        <button className={'button create'} onClick={props.onCreate.bind(this)}>Создать Заявку</button>
    )
}