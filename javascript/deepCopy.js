/*
let fridge = [1, 2, 3, 4, 5, 6];
// ... it is a spread operator used to spread the values from ref type
let refridgerator=[...fridge]; // [1,2,3,4,5,6]
// update fridge 
fridge.pop()
console.log("after updating fridge")
console.log(fridge)
console.log(refridgerator)
*/

let fridge = [1, 2, 3, 4, 5, 6 ,[7,8,9]];
// ... it is a spread operator used to spread the values from ref type
let refridgerator=[...fridge]; // [1,2,3,4,5,6]
// update fridge
//fridge.pop()
fridge[1] = 90 // value is not same in both fridge and refridgerator as it is primitive value
fridge[6][1] = 100 // value of 6 index is same in both fridge and refridgerator as it is nested array
console.log("after updating fridge")
console.log(fridge)
console.log(refridgerator)