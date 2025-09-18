let name = "Shatanu";
let age = 21;
let job = "web developer";
console.log("My name is " + name + ". I am " + age + " years old. I work as a " + job + ".");
//i want to avoid concatenation(+ operator) then we use string literals
console.log(`My name is ${name}. I am ${age} years old. I work as a ${job}.`);

//upercase and lowercase
let name1 = "hey there";
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1);
console.log(name1.slice(1, 5))
console.log(name1.slice(-7, -1))
console.log(name1.substring(1, 5))//not take negative index
console.log(name1.length)
console.log(name1[2])
//iterating over string
for(let i=0;i<name1.length;i++){
    console.log(name1[i])
}
//search value
console.log(name1.indexOf("ey"))//1
console.log(name1.indexOf("t"))//4
//its found return index otherwise return -1
console.log(name1.indexOf("d"))//-1
console.log(name1.indexOf("es"))//-1

//convert string to array
let name2 = "Shatanu Pratap Singh"
let arr = name2.split("")
console.log(arr)
let arr1 = name2.split(" ")
console.log(arr)
//repeat
let str = "hello "
console.log(str.repeat(10))
console.log(str.split("").reverse().join(""))
//trim remove extra spaces
console.log(str.trim())
let para = "   hello this is my world   "
console.log(para)
console.log(para.trim())

