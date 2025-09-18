// higher order functions works on array
// if any function recieves another function as argument , then it's higher order function 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// create new array with even values only 
// filter((val, idx, arr)=>condition)
let even = arr.filter((ele) => ele % 2 == 0) 
console.log(even)
let odd = arr.filter((ele) => ele % 2 != 0)
console.log(odd)
let square = arr.map((ele) => ele * ele)
console.log(square)

let names = ["shantanu", "ved", "prasant", "mayur", "shantanu"]
let upnames = names.filter((ele) => ele!="shantanu")
console.log(upnames)

// map higher order function , it is used when u want to update or access each value 
// array.map((val, idx, arr)=>function)
let Newnames = ["shantanu", "ved", "prasant", "mayur", "shantanu"]
let newnames = Newnames.map((ele) => ele="dev "+ele)
console.log(newnames)
/*
let user=["Nitita","Mohan","Vijay","Prashant"];
let updatedUser=user.map((ele,idx,arr)=>ele="Dev "+ele)
console.log(updatedUser)
*/
// reduce : when you want to convert your complete array in single value
let sum= arr.reduce((val,acc)=>val+acc,5) // acc=0
console.log(sum)
let mul= arr.reduce((val,acc)=>val*acc,1)
console.log(mul)