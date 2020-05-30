let string1 = 'this' // return false
let string2 = 'tacocat' //return true

const palindrom = (str) => {
    let split = str.split('')
    // console.log(split)
    let reverse = split.reverse().join('')
    // console.log(reverse)

    if(str === reverse) {
        console.log(`Is ${str} a Palindrom: True`)
    } else if(str !== reverse) {
        console.log(`Is ${str} a Palindrom: False`)
    }
}

palindrom(string1)
palindrom(string2)