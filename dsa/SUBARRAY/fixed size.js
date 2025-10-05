/*
function maxSum(arr, k) {
    let sum = 0
    let maxS = -Infinity
    for (let i = 0; i <= arr.length - k; i++){
        for (let j = i; j < k + i; j++){
            sum += arr[j];
        }
        console.log(sum)
        maxS = Math.max(maxS,sum);
        sum=0
    }
    console.log("Max: "+maxS)
}
let arr =[6,9,3,8,4,-1,-6,9,9,8]
let k = 3
maxSum(arr,k)
*/


//FIXED SIZE WINDOW

function maxSum(arr, k) {
    sum = 0
    //find the sum of first element
    for (let i = 0; i < k + 1; i++){
            sum += arr[i]
    }
        let maxS= sum
    for (let i = k; i < arr.length; i++){
        sum = sum - arr[i - k] + arr[i]
        maxS= Math.max(sum,maxS)
    }
    console.log("Max: "+maxS)
}
let arr =[6,9,3,8,4,-1,-6,9,9,8]
let k = 3
maxSum(arr,k)