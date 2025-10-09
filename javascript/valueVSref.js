/*
//shollow copy in ref type
let fridge = [1, 2, 3, 4, 5];
let refigearator = fridge;// refridgerator got the reference of the fridge not the value 
console.log(fridge);
console.log(refigearator);
refigearator.pop();
console.log("after removing value from fridge");
console.log(fridge);
console.log(refigearator);
//deep copy in value type
let a=10;
let b = a; // b has stored the value a on new memory location
a=a+5;
console.log(a);
console.log(b);
*/


let fridge = {
    colddrink: "coke",
    juice: "mango",
}
let refigearator = fridge
console.log(fridge);
console.log(refigearator);
fridge.juice = "orange";
console.log("after update my frigde");
console.log(fridge);
console.log(refigearator);
