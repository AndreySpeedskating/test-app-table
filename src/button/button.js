import React from 'react'
import './createButton.css'

export const Button = (props, className, view, id) => {
    return (
        <button className={className} onClick={props} id={id}>{view}</button>
    )
}