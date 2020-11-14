import * as types from './actionTypes'

const reduxReducer = require('redux')

let SaveToLS = (item) => {
    localStorage.setItem('item', JSON.stringify(item))
}

let GetFromLS = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

let initialState = {
    item: (GetFromLS('item') === null)? [{
        number: '1',
        date: '29.10.2020 19:40',
        name: 'OOO INFO',
        DriverName: 'Petrov Sergey Evgenyevich',
        DriverTelephone: '+79994660399',
        comment: 'Glass PLF',
        ATI: 'https://ati.su/firms/12345/info',
        from: 'Ilycha str. 28',
        to: 'Babushkina str. 39'
    }]: GetFromLS('item')/*[{
        number: '1',
        date: '29.10.2020 19:40',
        name: 'OOO INFO',
        DriverName: 'Petrov Sergey Evgenyevich',
        DriverTelephone: '+79994660399',
        comment: 'Glass PLF',
        ATI: 'https://ati.su/firms/12345/info',
        from: 'Ilycha str. 28',
        to: 'Babushkina str. 39'
    },
    {
        number: '2',
        date: '29.10.2020 19:38',
        name: 'OOO INFO',
        DriverName: 'Petrovskyi Sergey Evgenyevich',
        DriverTelephone: '+79994660399',
        comment: 'Glass PLF',
        ATI: 'https://ati.su/firms/12345/info',
        from: 'Ilycha str. 28',
        to: 'Babushkina str. 39'
    }
    ]*/,
    validation: {
        name: false,
        DriverName: false,
        DriverTelephone: false,
        comment: false,
        ATI: false,
    },
    input: false,
    SortType: 'asc',
    SortField: 'number',
    Row: false,
    Editable: false,
    create: false,
    search: false,
    pageSize: 10,
    currentPage: 0
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case types._ADD: {
            let AddBid = action.value
            SaveToLS([...state.item, AddBid])
            return {
                ...state, item: [...state.item, AddBid],
                validation: {
                    name: false,
                    DriverName: false,
                    DriverTelephone: false,
                    comment: false,
                    ATI: false
                },
                input: false,
                create: false,
            }

        }
        case types._VALIDATION: {
            let valid = state.validation
            let key = action.id
            valid[key] = action.value
            return {
                ...state, validation: valid, input: true
            }
        }
        case types._SORT: {
            let SortType = state.SortType === 'asc'? 'desc' : 'asc'
            let SortField = action.value
            return {
                ...state, SortType, SortField
            }
        }
        case types._SHOW_FULL: {
            return {...state, Row: action.index}
        }
        case types._HIDE_FULL: {
            return {...state, Row: action.value}
        }
        case types._EDIT_ENABLED: {
            return {...state, Editable: action.value}
        }
        case types._SAVE_CHANGES: {
            let CloneState = state.item
            CloneState[action.index] = action.value
            console.log(action.index, action.value)
            SaveToLS(CloneState)
            return {
                ...state, item: CloneState, Row: false
            }
        }
        case types._CREATE: {
            return { ...state, create: true}
        }
        case types._SEARCH: {
            let string = action.value.trim().toLowerCase() === ''? false : action.value.trim().toLowerCase().split('')
            let result = (string !== false)?string.map((i)=> {
                let item
                (i.toString() === '+')? item="\\+" :(i.toString() === '\\')? item="\\\\": item=i
                return item
            }).join('') : false
            return { ...state, search: result, currentPage: 0}
        }
        case types._CLOSE: {
            return {...state, create: false}
        }
        case types._PAGE_SELECTOR: {
            let currentPage = action.value
            return { ...state, currentPage}
        }
        case types._DELETE: {
            let item = state.item
            item.splice(action.value, 1)
            SaveToLS(item)
            return {
                ...state, item: [...item]
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

const store = reduxReducer.createStore(reducer)
store.subscribe(()=> {
})