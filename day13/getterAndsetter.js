// getter are used to get values without revealing the actual keys
let obj = {
    fname: "shantanu",
    lname: "pratap",
    age: 20,
    get fullname() {
         return this.fname + " " + this.lname
       // return `${this.fname} ${this.lname}`
    },
    set setFirstname(newfname) {
        this.fname = newfname
    }
}
console.log(obj.fullname)
// console.log(obj.fname)
obj.setFirstname = "shanu"
console.log(obj.fname)
// getter and setter are used to securely access and update the properties of the object 