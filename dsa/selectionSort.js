function selection(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let small = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[small] > arr[j]) {
                small = j;

        }
        }
        let temp = arr[small];
        arr[small] = arr[i];
        arr[i] = temp;
    }
}
let arr=[5,3,8,4,2];
console.log(`before sorting: ${arr}`);
selection(arr);
console.log(`after sorting: ${arr}`);