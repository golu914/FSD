/*
Q1;Check if a given number is prime or not. 
*/
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(11)); // true
console.log(isPrime(4));  // false
/*
Q2;Print n consecutive numbers
*/
function printConsecutiveNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
printConsecutiveNumbers(5); // 1 2 3 4 5
/*
Q3;Find the maximum element in an array
*/
function findMaxElement(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMaxElement([3, 5, 7, 2, 8])); // 8
console.log(findMaxElement([])); // null
/*
Q4;Sum of all elements in an array
*/
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5])); // 15
console.log(sumOfArray([])); // 0
/*Question 5:Count even and odd numbers in the array
*/
function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return { evenCount, oddCount };
}
console.log(countEvenOdd([1, 2, 3, 4, 5])); // { evenCount: 2, oddCount: 3 }

/*Question 6:Count vowels and consonants in a string
*/
function countVowelsConsonants(str) {
    let vowels = 'aeiouAEIOU';  
    let vowelCount = 0;
    let consonantCount = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            consonantCount++;
        }
    }
    return { vowelCount, consonantCount };
}
console.log(countVowelsConsonants("Hello World")); // { vowelCount: 3, consonantCount: 7 }
/*Question 7:Check if a string is a palindrome
*/
function isStringPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }   
    return true;
}
console.log(isStringPalindrome("racecar")); // true
console.log(isStringPalindrome("hello")); // false

/*Question 8:Reverse a string
*/
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("racecar")); // "racecar"

/*Question 9:Remove all spaces from a string
*/
function removeSpaces(str) {
    return str.split(' ').join('');
}
console.log(removeSpaces("Hello World")); // "HelloWorld"
console.log(removeSpaces("  Leading and trailing  ")); // "Leadingandtrailing"
console.log(removeSpaces("NoSpaces")); // "NoSpaces"

/*Question 10:Convert lowercase to uppercase and vice versa
*/
function toggleCase(str) {
    let toggled = '';
    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            toggled += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            toggled += char.toLowerCase();
        } else {
            toggled += char;
        }
    }
    return toggled;
}
console.log(toggleCase("Hello World")); // "hELLO wORLD"
console.log(toggleCase("JavaScript123")); // "jAVAsCRIPT123"
console.log(toggleCase("12345!@#")); // "12345!@#"

