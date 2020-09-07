export const objectToArray = obj => {
    // const arr = []
    // for (const [_, value] of Object.entries(obj)) {
    //     arr.push(value)
    // }

    // return arr

    return obj
}

export const stringToArray = (str, to_int = 0) => {
    str = str.replace("[", "")
    str = str.replace("]", "")

    if (to_int == 1) {
        return str.split(',').map(function (item) {
            return parseFloat(item, 10);
        })
    }

    return str.split(",")
}