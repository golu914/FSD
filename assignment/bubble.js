/*
it compare adjacent elements and for ascending order heavy or larger elements moves to rights and for descending order larger elements moves to right
EX 1 arr=[7,4,5,6,9,2]
after swaping = [2,4,5,6,7,9,]
*/
function bubbleSort(arr) {
   // get the total number of elements in the array
    let n = arr.length
    //outer loop runs (n-1)times
    for (let i = 0; i < n - 1; i++){
        //inner loops runs through the unsorted array portion
        for (let j = 0; j < n - 1 - i; j++) {
            //compare adjucent elements
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;

            }
                
        }
    }
}
let arr = [5, 9, 4, 2, 6, 8]
console.log(`Before sorting : ${arr}`)
bubbleSort(arr)
console.log(`After swaping : ${arr}`)