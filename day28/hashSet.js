// it only stores unique values 
let set= new Set();
set.add(1);
set.add(2)
set.add(2)
set.add(1)
set.add(3)
set.add("hello")
console.log(set)
console.log(set.size)
console.log(set.has(1)) // looks for value in set 
console.log("is deleted: "+set.delete(5)) // delete the value 
console.log(set) // printing the set
set.clear() // removing all the values 
console.log(set) // printing the set

// write a program to remove all the duplicates from an array
// ex: arr[1,2,3,1,2,3,2,3,2,3]
// output : [1,2,3]
let arr=[1,2,3,1,2,3,2,3,2,3]
let set1= new Set()
for(let val of arr){
    set1.add(val) // {1,2,3}
}
let res=[]
for(let val of set){
    res.push(val)
}
console.log(res)
console.log("New example")
let arr1 = [1, 2, 1, 1, 1, 2, 2, 3, 3, 3, 1, 1]
let uniqSet = new Set(arr1)
let result = [...uniqSet]
console.log(result)