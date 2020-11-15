import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./App.css";
import {table} from "./Table/table";
import {input} from "./Input/input";
import {inputClean, isValid} from "./function/function";
import {TablePaginate} from "./paginate/paginate"
import {Button} from "./button/button";
import {Search} from "./search/search";
import * as types from "./Redux/actionTypes"
import {Close, add, searchValue, Valid, Delete, Sort, ShowFull, HideFull} from "./Redux/action";




class App extends Component{

    render() {
        return (
            <div className="App">
                {Search(this.props)}
                {(this.props.create)?input(this.props, (event)=>isValid(event, this.props)):table(this.props)}
                {(this.props.item.length>5 && !this.props.create)?TablePaginate(this.props): null}
                {(!this.props.create)?Button(()=>this.props.onCreate(), 'create', 'Создать заявку'): null}
                {(this.props.input === false)? inputClean('input'): null}
            </div>
        )
    }
}


function mapStateToProps (state) {
    return {
        ...state
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onAdd: function (item) {if (item() !== null) dispatch(add(item))},
        onClose: function () {dispatch(Close())},
        onValid: function (item, id) {dispatch(Valid(item, id))},
        onDelete: function (event) {dispatch(Delete(event))},
        onSort: function (item) {dispatch(Sort(item))},
        onShowFull: function (event) {dispatch(ShowFull(event))},
        onHideFull: function () {dispatch(HideFull())},
        onGetEditable: function (event) {dispatch({type: types._EDIT_ENABLED, value: event.target.id})},
        onSaveChanges: function (item, index) {dispatch({type: types._SAVE_CHANGES, value: item(), index: index})},
        onCreate: function () {dispatch({type: types._CREATE})},
        onSearch: function (item) {dispatch(searchValue(item))},
        onPageChangeHandler: function({selected}) {dispatch({type: types._PAGE_SELECTOR, value: selected})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

