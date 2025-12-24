/*
Question 11: 
A social media platform collects usernames for a contest but some users accidentally entered their names multiple times. The system needs to filter out duplicate entries to ensure fairness.
Input:
First line contains an integer N (1 ≤ N ≤ 1000).
Second line contains N space-separated integers representing user IDs.
Output:
Print the array after removing duplicates while maintaining the original order.
*/
function removeDuplicates(userIDs) {
    const seen = new Set();
    const result = [];
    for (const id of userIDs) {
        if (!seen.has(id)) {
            seen.add(id);
            result.push(id);
        }
    }
    return result;
}
    

// Example usage:
const userIDs = [101, 202, 303, 101, 404, 202, 505];
const uniqueUserIDs = removeDuplicates(userIDs);
console.log(uniqueUserIDs); // Output: [101, 202, 303, 404, 505]


/*
Question 12: 
A grocery store management system maintains a list of products. A new product is introduced, and it needs to be added at a specific position in the inventory list.Write a program to insert an element at a specified index in an Inventory.
Input:
First line contains two integers N (1 ≤ N ≤ 1000) and X, the new element.
Second line contains N space-separated integers representing existing products.
Third line contains an integer P (0 ≤ P ≤ N), the position to insert X.
Output:
Print the new array after insertion.
*/
function insertAtPosition(n, x, products, p) {
    products.splice(p, 0, x);
    return products;
}
// Example usage:
const N = 5;
const X = 99;   
const products = [10, 20, 30, 40, 50];
const P = 2;
const updatedProducts = insertAtPosition(N, X, products, P);
console.log(updatedProducts); // Output: [10, 20, 99, 30, 40, 50]
function insertAtPosition(n, x, products, p) {
    products.splice(p, 0, x);
    return products;
}
/*
Question 13: 
A hotel booking system records the room numbers of guests. Due to system issues, some guests are assigned the same room multiple times. The hotel wants to identify repeated room numbers. Can you write a program to help them?
Input:
First line contains an integer N (1 ≤ N ≤ 1000).
Second line contains N space-separated integers representing room numbers.
Output:
Print all repeated room numbers in ascending order.
If no repetition is found, print -1.
*/
function findRepeatedRooms(roomNumbers) {
    const roomCount = {};
    const repeatedRooms = new Set();
    for (const room of roomNumbers) {
        if (roomCount[room]) {
            roomCount[room]++;
            repeatedRooms.add(room);
        } else {
            roomCount[room] = 1;
        }
    }
    if (repeatedRooms.size === 0) {
        return -1;
    }
    return Array.from(repeatedRooms).sort((a, b) => a - b);
}
// Example usage:
const roomNumbers = [101, 202, 303, 101, 404, 202, 505];
const repeatedRooms = findRepeatedRooms(roomNumbers);
console.log(repeatedRooms); // Output: [101, 202]`

/*Question 14:
A radio station is analyzing unique song requests from listeners. Some songs are requested multiple times, while others are played only once. The station wants to find songs that were requested just once.
Input:
First line contains an integer N (1 ≤ N ≤ 1000).
Second line contains N space-separated integers representing song request IDs.
Output:
Print all non-repeating elements in ascending order.
If no unique element exists, print -1.
*/
function findUniqueSongs(songRequests) {
    const songCount = {};
    const uniqueSongs = [];
    for (const song of songRequests) {
        songCount[song] = (songCount[song] || 0) + 1;
    }
    for (const song in songCount) {
        if (songCount[song] === 1) {
            uniqueSongs.push(Number(song));
        }
    }
    if (uniqueSongs.length === 0) {
        return -1;
    }
    return uniqueSongs.sort((a, b) => a - b);
}
// Example usage:
const songRequests = [1, 2, 2, 3, 4, 4, 5];
const uniqueSongs = findUniqueSongs(songRequests);
console.log(uniqueSongs); // Output: [1, 3, 5]

/*Question 5:A package delivery service maintains a record of packages sent and received. They want to identify matching sender-receiver pairs where (A, B) exists along with (B, A). Write a program to solve this problem. 
Input:
First line contains an integer N (1 ≤ N ≤ 1000), the number of sender-receiver pairs.
Next N lines contain two space-separated integers representing the sender and receiver IDs.
Output:
Print all symmetric pairs in ascending order of the first ID.
*/
function findSymmetricPairs(pairs) {
    const pairSet = new Set();
    const symmetricPairs = [];
    for (const [sender, receiver] of pairs) {
        const reversePair = `${receiver},${sender}`;
        if (pairSet.has(reversePair)) {
            symmetricPairs.push([Math.min(sender, receiver), Math.max(sender, receiver)]);
        }   
        pairSet.add(`${sender},${receiver}`);
    }
    symmetricPairs.sort((a, b) => a[0] - b[0]);
    return symmetricPairs;
}
// Example usage:
const pairs = [
    [1, 2], 
    [3, 4],
    [2, 1],
    [5, 6],
    [4, 3]
];
const symmetricPairs = findSymmetricPairs(pairs);
console.log(symmetricPairs); // Output: [[1, 2], [3, 4]]
/*
Question 19: 
A bridge engineering team wants to balance weight distribution by finding an equilibrium point where the sum of weights on the left equals the sum on the right.
Input:
First line contains an integer N (1 ≤ N ≤ 1000).
Second line contains N space-separated integers representing weights.
Output:
Print the equilibrium index. If none exist, print -1.
*/
function findEquilibrium(n, nums){
  let totalSum=0;
  for(let val of nums){
        totalSum+=val;
  }
  let leftSum=0;
  for(let i=0;i<n;i++){
    totalSum=totalSum-nums[i];
    if(totalSum==leftSum){
        return i;
    }
    leftSum+=nums[i];
  }
  return -1;
}
let n=7;
let nums=[-7,1,5,2,-4,3,0]
console.log(findEquilibrium(n, nums))

