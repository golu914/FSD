function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (arr[mid] == target) {
            return`${target} found on ${mid}`
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end=mid-1
        }
    }
    return`Element not found`
}
let arr = [1, 2, , 3, 4, 5, 6, 7, 8, 9, 10]
let target = 7
console.log(binarySearch(arr,target))