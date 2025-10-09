let date = new Date();
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth())//0-janurary,11-december like array
console.log(date.getDay())//0-sunday,6-saturday
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log(date.toDateString())
//update date
date.setFullYear(2023)
date.setMonth(6)//july
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.toDateString())