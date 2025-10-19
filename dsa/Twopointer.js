/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // size of array will be 1<=size<=n. , n=2^31+1
// two pointer
let start=0;
let end=arr.length-1;
while(start<end){
   let temp=arr[start];
   arr[start]=arr[end];
   arr[end]=temp;
   start++;
   end--;
}
console.log(arr)


/*
// brute force
let res=[]
for(let end=arr.length-1;end>=0;end--){
   res.push(arr[end])
}
console.log(res)
*/
/*
//reverse a string using two pointer
let str="hello";
let arr=str.split("");
let start=0;
let end = arr.length - 1;
while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
console.log(arr.join(""))
*/
//palindrome using two pointer
let str = "eve";
let arr = str.split("");
let start = 0;
let end = arr.length - 1;
let palindrome = true;
while (start < end) {
    if (arr[start] != arr[end]) {
        palindrome = false;
        break;
    }
    start++;
    end--;
}
if (palindrome) {
    console.log("True")
}
else {
    console.log("False")
}

