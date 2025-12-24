/*Question 1: 
Rahul is a software engineer at a logistics company. His team is developing an automated system to track the weights of different parcels being shipped. To optimize the packaging process, Rahul needs to identify the lightest parcel from a given list of parcel weights.
Write a program to help Rahul  that takes an array of integers representing the weights of parcels and finds the smallest weight.
 Input:
1>The first line contains an integer N (1 ≤ N ≤ 1000), the number of parcels.
2>The second line contains N space-separated integers representing the weight of each parcel (1 ≤ weight ≤ 10⁶).
*/
function findLightestParcel(weights) {
    let minWeight = weights[0];
    for (let i = 1; i < weights.length; i++) {
        if (weights[i] < minWeight) {
            minWeight = weights[i];
        }
    }
    return minWeight;
}

// Example usage:
const parcelWeights = [450, 200, 350, 150, 400];
const lightestParcel = findLightestParcel(parcelWeights);
console.log("The lightest parcel weight is:", lightestParcel); // Output: The lightest parcel weight is: 150



/*A meteorological department is tracking the highest recorded temperatures across different cities. To analyze global warming trends, they need to determine the maximum temperature from a given dataset.
Write a program that finds the highest temperature recorded in a given list.
Input:
First line contains an integer N (1 ≤ N ≤ 1000), the number of cities.
Second line contains N space-separated integers representing temperatures (−100 ≤ temp ≤ 100).
Output:
Print the highest temperature recorded.
*/
function findHighestTemperature(temperatures) {
    let maxTemp = temperatures[0];
    for (let i = 1; i < temperatures.length; i++) {
        if (temperatures[i] > maxTemp) {
            maxTemp = temperatures[i];
        }
    }
    return maxTemp;
}
// Example usage:
const cityTemperatures = [23, -45, 12, 67, 34, -89, 54];
const highestTemperature = findHighestTemperature(cityTemperatures);
console.log("The highest recorded temperature is:", highestTemperature); // Output: The highest recorded temperature is: 89

/*
Question 3: 
A librarian is digitizing old books and needs to store page numbers in reverse order for a historical reference system. Help the librarian reverse the order of a given list of page numbers.
Input:
First line contains an integer N (1 ≤ N ≤ 1000), the number of pages.
Second line contains N space-separated integers representing the page numbers.
Output:
Print the reversed array.
 */
function reverseNumbers(pageNumbers) {
    let left = 0;
    let right = pageNumbers.length - 1;
    while (left < right) {
        // Swap the elements
        let temp = pageNumbers[left];
        pageNumbers[left] = pageNumbers[right];
        pageNumbers[right] = temp;
        left++;
        right--;
    }
    return pageNumbers;
}
// Example usage:
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedPages = reverseNumbers(pages);
console.log("Reversed page numbers:", reversedPages); // Output: Reversed page numbers: [9, 8, 7, 6, 5, 4, 3, 2, 1]
/*Question 4: 
An ancient manuscript contains secret numerical codes, and the archaeologists suspect that palindromic numbers hold hidden meanings. They need a tool to identify whether a given number is a palindrome or not.
Input:
A single integer N (1 ≤ N ≤ 10⁶).
Output:
Print "YES" if the number is a palindrome, otherwise print "NO"
*/
function isPalindrome(n) {
    let s = n.toString();
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
            return "NO";
        }
        left++;
        right--;
    }
    return "YES";
}
// Example usage:
const number = 12321;
const result = isPalindrome(number);
console.log(`Is the number ${number} a palindrome?`, result); // Output: Is the number 12321 a palindrome? YES

/*Question 5:
A space research team is identifying symmetrical asteroids whose ID numbers are palindromes. They need a program to find all palindromic numbers in a given range.
Input:
Two integers L and R (1 ≤ L ≤ R ≤ 10⁶).
Output:
Print all palindrome numbers in the range L to R, space-separated.

function palindrome(a){
let p=0
let q=a.length-1
while(p<q){
    if(a[p]!=a[q]) return false
    p++
    q--
}
return true
}
let x=10
let y=50
let s=""
for(let i=x;i<=y;i++){
    if(palindrome(String(i))){
        if(s==""){
            s=String(i)
            continue
        }
        s=s+" "+String(i)
    }
}
console.log(s)
// Example usage:
const L = 10;
const R = 100;
const palindromesInRange = palindrome(L, R);
console.log(`Palindromic numbers between ${L} and ${R}:`, palindromesInRange.join(' ')); // Output: Palindromic numbers between 10 and 100: 11 22 33 44 55 66 77 88 99  
*/
/*Question 6: 
A sports analytics team is analyzing the scores of players in a tournament. They want to find the second-best and second-worst scores to evaluate performance trends. Can you help them by writing a software program?
Input:
First line contains an integer N (2 ≤ N ≤ 1000), the number of players.
Second line contains N space-separated integers representing scores (0 ≤ score ≤ 10⁶).
Output:
Print the second smallest and second largest element space-separated.
*/
function findSecondSmallestAndLargest(scores) {
    let uniqueScores = Array.from(new Set(scores));
    uniqueScores.sort((a, b) => a - b);
    const secondSmallest = uniqueScores[1];
    const secondLargest = uniqueScores[uniqueScores.length - 2];
    return { secondSmallest, secondLargest };
}
// Example usage:
const playerScores = [50, 20, 70, 90, 20, 100, 50];
const { secondSmallest, secondLargest } = findSecondSmallestAndLargest(playerScores);
console.log(`Second smallest score: ${secondSmallest}, Second largest score: ${secondLargest}`); // Output: Second smallest score: 50, Second largest score: 90

/*Question 7:A movie streaming platform wants to analyze user preferences by counting how many times each movie was watched in a week. Write a program that takes an array of movie IDs and counts the frequency of each movie watched.
Input:
First line contains an integer N (1 ≤ N ≤ 1000), the number of watch records.
Second line contains N space-separated integers, each representing a movie ID.
Output:
Print each movie ID along with its count, sorted in ascending order of movie ID.
*/
function countMovieFrequencies(N, movies) {
  const frequency = {};

  // Count frequency of each movie ID
  for (let i = 0; i < N; i++) {
    const movieID = movies[i];
    frequency[movieID] = (frequency[movieID] || 0) + 1;
  }

  // Get movie IDs and sort them
  const sortedMovieIDs = Object.keys(frequency).map(Number).sort((a, b) => a - b);

  // Print each movie ID with its count
  for (const id of sortedMovieIDs) {
    console.log(id, frequency[id]);
  }
}
// Example usage:
const N = 8;
const movies = [5, 3, 5, 2, 3, 4, 2, 5];
countMovieFrequencies(N, movies);
// Output:
// 2 2
// 3 2
// 4 1
// 5 3

/*Question 8:
A conveyor belt system at an airport needs to cycle luggage handling, shifting each piece K positions left to optimize distribution. Write a program that rotates an array left by K positions using the Block Swap Algorithm.
Input:
First line contains two integers N (1 ≤ N ≤ 1000) and K (0 ≤ K ≤ N).
Second line contains N space-separated integers representing luggage IDs.
Output:
Print the rotated array.
*/
function rotate(n,k,nums){
    for(let i=0;i<k;i++ ){
        let ele=nums.shift();
        nums.push(ele)
    }
    return nums;
}
console.log(rotate(5,2,[10,20,30 ,40 ,50] ))

/*Question 9:An investment bank needs to analyze the median stock price over a period to make financial decisions. Write a program to help them.
Input:
First line contains an integer N (1 ≤ N ≤ 1000).
Second line contains N space-separated integers (sorted in ascending order).
Output:
Print the median value (if N is odd, print the middle element; if even, print the average of two middle elements).
*/
function findMedian(prices) {
    const n = prices.length;
    if (n % 2 === 1) {
        return prices[Math.floor(n / 2)];
    } else {
        const mid1 = prices[n / 2 - 1];
        const mid2 = prices[n / 2];
        return (mid1 + mid2) / 2;
    }
}
// Example usage:
const stockPrices = [10, 20, 30, 40, 50];
const medianPrice = findMedian(stockPrices);
console.log("The median stock price is:", medianPrice); // Output: The median stock price is: 30

/*Question 10:
A hospital database records patient IDs but due to a system glitch, duplicate IDs were stored. The hospital needs a way to remove duplicates. Write a program to remove duplicates from a sorted list of patient inventory and print the unique elements.
Input:
First line contains an integer N (1 ≤ N ≤ 1000).
Second line contains N space-separated integers (sorted in non-decreasing order).
Output:
Print the array after removing duplicates.
*/
function removeDuplicates(patientIDs) {
    if (patientIDs.length === 0) return [];
    const uniqueIDs = [patientIDs[0]];
    for (let i = 1; i < patientIDs.length; i++) {
        if (patientIDs[i] !== patientIDs[i - 1]) {
            uniqueIDs.push(patientIDs[i]);
        }
    }
    return uniqueIDs;
}
// Example usage:
const patientInventory = [101, 102, 102, 103, 104, 104, 105];
const uniquePatientIDs = removeDuplicates(patientInventory);
console.log("Unique patient IDs:", uniquePatientIDs); // Output: Unique patient IDs: [101, 102, 103, 104, 105]