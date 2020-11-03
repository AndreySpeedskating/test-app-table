
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