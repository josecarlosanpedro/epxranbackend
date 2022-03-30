export const percentage = (percent, total) => {
    return Number(((percent/ 100) * total).toFixed(2))
}
export const PHmobileNumber = (number) => {
    let numb = number.substr(number.length - 10)
    if(numb.length < 10) {
        return ""
    }
    return `+63${numb}`
}


export const percIncrease = (a, b) =>{
    let percent;
    if(b !== 0) {
        if(a !== 0) {
            percent = (b - a) / a * 100;
        } else {
            percent = b * 100;
        }
    } else {
        percent = - a * 100;            
    }       
    return Math.floor(percent);
}