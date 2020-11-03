import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./App.css";
import {table} from "./Table/table";
import {input} from "./Input/input";
import {inputClean} from "./function/function";
import {TablePaginate} from "./paginate/paginate"
import {CreateButton} from "./createbutton/createBid";
import {Search} from "./search/search";




class App extends Component{


    isValid = (event) => {
        console.log(event.target.value)
        document.getElementById('Add').disabled = 'disabled'
        let valid = event.target.id !== 'DriverTelephone' ? '[А-Яа-яЁё,a-zA-Z]{2,}' : '^\\+?[0-9]{11}'
        let result =  !!event.target.value.match(valid)
        result === false? event.target.classList.add('invalid') : event.target.classList.remove('invalid')
        if (event.target.value.length>0) this.props.onValid(result, event.target.id)
        let Values = Object.values(this.props.validation).every((i)=> i === true)
        if (Values) document.getElementById('Add').disabled = ''
    }


    render() {
        return (
            <div className="App">
                {Search(this.props)}
                {table(this.props, this.props.onShowFull.bind(), this.props.onDelete.bind())}
                {this.props.item.length>1? TablePaginate(this.props): null}
                {(this.props.create)?input(this.props, this.isValid.bind()): CreateButton(this.props)}
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
        onAdd: (item) => (item() !== null) ? dispatch({type: '_Add', value: item()}) : null,
        onClose: () => dispatch({type: '_Close'}),
        onValid: (item, id) => dispatch({type: '_Validation', value: item, id: id}),
        onDelete: (event) => dispatch({type: '_Delete', value: event.target.id}),
        onSort: (item) => dispatch({type: '_OnSort', value: item}),
        onShowFull: (event) => dispatch({type: '_ShowFull', index: event.target.id}),
        onHideFull: () => dispatch({type: '_HideFull', value: false}),
        onGetEditable: (event) => dispatch({type: '_GetEditable', value: event.target.id}),
        onSaveChanges: (item, index) => dispatch({type: '_SaveChanges', value: item(), index: index}),
        onCreate: () => dispatch({type: '_Create'}),
        onSearch: (item) => dispatch({type: '_Search', value: item()}),
        onSearchValue : (item) => dispatch({type: '_SearchValue', value: item()}),
        onPageChangeHandler: ({selected}) => dispatch({type: '_PageSelector', value: selected})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

