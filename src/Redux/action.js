import * as types from "./actionTypes";


export function Close () {return {type: types._CLOSE}}

export function add (item) {return {type: types._ADD, value: item()}}

export function searchValue (item) { return{type: types._SEARCH, value: item()} }

export function Valid (item, id) {return {type: types._VALIDATION, value: item, id: id}}

export function Delete (event) {return {type: types._DELETE, value: event.target.id}}

export function Sort (item) {return {type: types._SORT, value: item}}

export function ShowFull (event) { return {type: types._SHOW_FULL, index: event.target.id}}

export function HideFull () { return {type: types._HIDE_FULL, value: false}}