let map = new Map(); // creating hashmap
map.set("chocolate", 10); // adding value 
map.set("chips", 5)
map.set("coldDrinks", 10)
console.log(map) // printing 
console.log(map.get("chips"))
console.log(map.has("coldDrinks"))
map.delete("chips")
console.log(map)
console.log(map.size)
map.clear()
console.log(map)

let str = "hey team we are hard working matlab when bhavesh comes matlab he is very dedicated matlab . when i see him matlab very dedicated"
let arr = str.split(" ")
let freq = new Map()
for (i = 0; i < arr.length; i++){
    if (freq.has(arr[i])) {
        freq.set(arr[i],freq.get(arr[i]+1))
    } else {
        freq.set(arr[i],1)
    }
}
console.log(freq)

let word = ""
let frequency = 0;
for (let keyValye of freq) {
     let key=keyValye[0]
    if (freq.get(key) > frequency) {
        word = key
        frequency = freq.get(key)
    }
}
console.log(word)
