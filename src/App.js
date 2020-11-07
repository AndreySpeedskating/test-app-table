import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./App.css";
import {table} from "./Table/table";
import {input} from "./Input/input";
import {inputClean, isValid} from "./function/function";
import {TablePaginate} from "./paginate/paginate"
import {CreateButton} from "./createbutton/createBid";
import {Search} from "./search/search";




class App extends Component{


    render() {
        return (
            <div className="App">
                {Search(this.props)}
                {table(this.props)}
                {this.props.item.length>1? TablePaginate(this.props): null}
                {(this.props.create)?input(this.props, isValid.bind(this)): CreateButton(this.props)}
                {(this.props.input === false)? inputClean.call(this, 'input'): null}
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
        onAdd: function (item) {if (item() !== null) dispatch({type: '_Add', value: item()})},
        onClose: function () {dispatch({type: '_Close'})},
        onValid: function (item, id) {dispatch({type: '_Validation', value: item, id: id})},
        onDelete: function (event) {dispatch({type: '_Delete', value: event.target.id})},
        onSort: function (item) {dispatch({type: '_OnSort', value: item})},
        onShowFull: function (event) {dispatch({type: '_ShowFull', index: event.target.id})},
        onHideFull: function () {dispatch({type: '_HideFull', value: false})},
        onGetEditable: function (event) {dispatch({type: '_GetEditable', value: event.target.id})},
        onSaveChanges: function (item, index) {dispatch({type: '_SaveChanges', value: item(), index: index})},
        onCreate: function () {dispatch({type: '_Create'})},
        onSearch: function (item) {dispatch({type: '_Search', value: item()})},
        onPageChangeHandler: function({selected}) {dispatch({type: '_PageSelector', value: selected})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

