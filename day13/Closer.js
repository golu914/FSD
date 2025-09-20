// closer function: a function along with its lexical scope
/*
function add() {
    let a = 2
    let b = 4
    return function print() {
        console.log(a + b)
    }
}
let sum = add()
sum() // closer function
*/

function Parent() {
    let money = 1000
    return function child() {
        let Cmoney = 5000
        console.log(money+Cmoney)
    }
}
let Childproperty = Parent()
Childproperty() // closer function
