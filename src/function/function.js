

function DateOfBid ()  {
    return new Date().toLocaleDateString() + ' '+ new Date().toLocaleTimeString().slice(0, -3)
}

export function inputClean (className) {
    let i = document.getElementsByClassName(className)
    for (let j=0; j<i.length; j++) {
        i[j].value = ''
    }
}

export function inputsValue (className, props) {
    let array = Array.from(document.getElementsByClassName(className))
    let result = array.every(i => i.value !== '')
    return (!!result)?
        {   number: `${props.item.length+1}`,
            date: DateOfBid(),
            name: array[0].value,
            DriverName: array[1].value,
            DriverTelephone: array[2].value,
            comment: array[3].value,
            ATI: array[4].value,
            from: array[5].value,
            to: array[6].value
        } : null
}

export function search (i, props) {
    if (i.number.toLowerCase().match(props.search) || i.date.toLowerCase().match(props.search) || i.name.toLowerCase().match(props.search)
        || i.DriverName.toLowerCase().match(props.search) || i.DriverTelephone.toLowerCase().match(props.search)
        || i.comment.toLowerCase().match(props.search) || i.ATI.toLowerCase().match(props.search) || i.from.toLowerCase().match(props.search)
        || i.to.toLowerCase().match(props.search)) {return i} else {return undefined}
}


export function isValid (event, props) {
    document.getElementById('Add').disabled = 'disabled'
    let valid = event.target.id !== 'DriverTelephone' ? '[А-Яа-яЁё,a-zA-Z]{2,}' : '^\\+?[0-9]{11}'
    let result =  !!event.target.value.match(valid)
    result === false? event.target.classList.add('invalid') : event.target.classList.remove('invalid')
    if (event.target.value.length>0) props.onValid(result, event.target.id)
    let Values = Object.values(props.validation).every((i)=> i === true)
    if (Values) document.getElementById('Add').disabled = ''
}

export function GetData (className) {
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

export function SearchValue (id) {
    let value = document.getElementById(id).value
    if (value !== null) return value
}

