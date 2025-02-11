// Maximum number in a array :
// function maxNum(arr){
//     let max = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max) max = arr[i];
//     }
//     console.log(max);
// // }
// function maxNum(arr){
//     let max = Math.max(...arr);
//     console.log(max);
// }
// maxNum([2,32,111,430,0,-1])






// Palindrome :
// function isPalindrome(str){
//     if(str === str.split('').reverse().join('')) return true;
//     else return false;
// }
// console.log(isPalindrome("ab"));




// Reverse String :
// function reverse(str) {
//     let res = ""
//     for(let i = str.length - 1; i >= 0 ;i--){
//         res += str[i]
//     }
//     console.log(res);
// }
// reverse("prathvi")




// Even Number :
// function evenNumber(arr){
//     let res = [];
//     for(let a of arr){
//         if(a%2===0) res.push(a);
//     }
//     console.log(res);
// }
// evenNumber([2,32,1,4,5,7,9]);





// Factorial :
// function factorial(num){
//     let ans = 1;
//     for(let i=1; i<=num; i++){
//         ans = ans*i;
//     }
//     console.log(ans);
// }
// factorial(4);



// Prime Number
// function primeNumber(num){
//     for(let i=2; i<num; i++){
//         if(num%i === 0) return false;
//     }
//     return true;
// }
// console.log(primeNumber(11))




// Largest Element in Nested Array;
// function largestElement(arr){
//     let largest = 0;
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             largestElement(arr[i]);    
//         }
//         else {
//             if(arr[i]> largest){
//                 largest = arr[i];
//             }
//         }
//     }
//     largestElement(largest)
//     console.log(largest);
// }
// largestElement([[32,1,23],[231,39,29]]);




// Fibonacci :
// function generateFibonacci(n){
//     function fibonacci(n){
//         if(n<=1) return n;
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
//     let ans = [];
//     for(let i=0; i<n; i++){
//         ans.push(fibonacci(i));
//     }
//     return ans;
// }
// console.log(generateFibonacci(7));


// Title Case :
// function titleCase(str){
//     let ans = str.split(" ");
//     let res = [];
//     for(let i=0; i<ans.length; i++){
//         res.push(ans[i].slice(0,1).toUpperCase() + ans[i].slice(1, ans[i].length));
//     }
//     return res.join(" ");
// }
// console.log(titleCase("this is me"));




// Sort in ascending:
// function asc(arr){
//     return arr.sort((a,b)=> b-a);
// }
// console.log(asc([2,3,1,51,17,23]));




// Create Deep copy:
// function deepCopy(arr){
//     let arr = [...arr];
//     return arr;
// }



// Recursive factorial :
// function recursiveFactorial(num){
//     if(num<=1) return num;
//     return recursiveFactorial(num - 1);
// }



// Flatten Array :
// function flattenArray(arr){
//     let res = [];
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             res = res.concat(flattenArray(arr[i]));
//         }
//         else{
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log(flattenArray([3,4,[9,3],[6],3]));




// function prime(num){
//     for(let i=2; i<num; i++){
//         if(num%i===0) return false;
//     }
//     return true;
// }
// console.log(prime(11))



// Remove first Element ;
// function removeFirst(str){
    // console.log(arr.slice(1));
    // console.log(str.slice(1));
// }
// removeFirst([12,3,4,1]);
// removeFirst("prathvi");



// Use Callback function:
// function useCallback(name, printName){
//     printName(name);
// }
// useCallback("prathvi", (p)=> console.log(p));



// Add Properties to Object :
// let obj = { name : 'prathvi'};
// obj.age = 25;
// console.log(obj);



// console.log(1 === '1');
// console.log(0 === false);



// Print Power of number :
// function printPowerOfNumber(number, expo){
//     return number ** expo;
// }
// console.log(printPowerOfNumber(3,2));




// return frequency : 
// function frequency(arr){
//     let obj = {};
//     for(let i=0; i<arr.length; i++){
//         if(obj[arr[i]]) obj[arr[i]] += 1;
//         else obj[arr[i]] = 1;
//     }
//     return obj;
// }
// console.log(frequency([1, 1, 2, 3, 3, 4]));




// count occurences of char in string:
// function countOcc(str){
//     let newStr = str.split('');
//     let obj = {}
//     for (let i = 0; i < newStr.length; i++) {
//         if(obj[newStr[i]]){
//             obj[newStr[i]] += 1;
//         }
//         else{
//             obj[newStr[i]] = 1;
//         }
//     }
//     return obj;
// } 
// function countOcc(str, char){
//     let newStr = str.split('');
//     let count = 0;
//     for(let i = 0; i < newStr.length; i++){
//         if(newStr[i] == char){
//             count++;
//         }
//     }
//     return count;
// } 
// console.log(countOcc("prathvapir",'p'));


// celsius to fahrenheit:
// function celsiusToFahrenheit(celsius){
//     // (0°C × 9/5) + 32 
//     return (celsius* 9/5) + 32 
// }
// console.log(celsiusToFahrenheit(5))



// function mergeTwoArray(arr, arr2){
//     return [...arr, ...arr2];
// }
// console.log(mergeTwoArray([1,2,3],[4,5,6]))



// function findIntersection(arr, arr2){
//     let res = [];
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr[i] === arr2[j]){
//                 res.push(arr[j]);
//             }
//         }
//     }
//     return res;
// }
// console.log(findIntersection([1,23,45,6,9],[1,6,32,42,9]));


// return union
// function union(a, b) {
//     let res = [...a, ...b];
//     let ans = [];
//     let obj = {};
//     for(let i = 0; i < res.length; i++){
//         if(obj[res[i]]){
//             obj[res[i]] += 1;
//         }
//         else {
//             obj[res[i]] = 1
//         }
//     }
//     for( let num in obj ){
//         ans.push(Number(num))
//     }
//     return ans;
// }
// console.log(union([1,2,4],[4,5,6]))



//  Debounce 
// function debounce(func,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer = setTimeout(func,delay)
//     }
// }
// function a(b,c){
//     return b + c;
// }
// console.log(debounce(a(1,3),2000));




//  sort two merged array :
// function sorted(arr1, arr2){
//     const res = [...arr1,...arr2];
//     const ans = res.sort((a,b)=> a - b);   
//     return ans;

// }
// console.log(sorted([2,43,1,76,32],[9,4,10,17,2]));



// Deep Clone :
// function deepClone(arr){
//     let newArr = [...arr];
//     return newArr;
// }
// const arr = [1,2,3,4,5];
// const arr2 = deepClone(arr);



// Recursion Factorial:
// function recursionFactorial(n){
//     if(n <= 1) return n;
//     return n * recursionFactorial(n-1);
// }
// console.log(recursionFactorial(3));



// Alphanumeric Palindrome :
// function alphanumericPalindrome(str){
//     let alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
//     let newStr = str.toLowerCase().split('');
//     let filtered = newStr.filter((letter) => alphanumeric.includes(letter));
//     console.log(filtered);
//     let reverse = [...filtered].reverse().join('');
//     return (filtered.join('') === reverse);
// }
// console.log(alphanumericPalindrome("ap12!$21pa"));


// function alphanumericPalindrome(str){
//     let alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789"
//     let newArr = str.toLowerCase().split('');
//     let newStr = newArr.filter((letter)=> alphanumeric.includes(letter));
//     console.log(newStr.join(''));
//     let reversedStr = [...newStr].reverse().join('');
//     console.log(reversedStr);
//     if(newStr.join('') === reversedStr) return true;
//     return false;
// }
// console.log(alphanumericPalindrome("ap12!$21pa"));


// Flattens a array;
// function flattenArray(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])){
//             res = res.concat(flattenArray(arr[i]))
//         }
//         else{
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log(flattenArray([1,2,[3,4],[5]]));




// // is Anagram :
// function isAnagram(str1, str2){
//     let newStr1 = str1.toLowerCase().split('').sort().join('');
//     console.log(newStr1);
//     let newStr2 = str2.toLowerCase().split('').sort().join('');
//     console.log(newStr2);
//     if(newStr1 === newStr2) return true;
//     return false;
// }
// console.log(isAnagram("Prathvi", "ivtharp"));




// return unique element in array;
// function unique(arr){
//     let ans = [];
//     let obj = {};
//     for(let i=0; i<arr.length; i++){
//         if(obj[arr[i]]) obj[arr[i]] += 1;
//         else obj[arr[i]] = 1;
//     }
//     console.log(obj);
//     for(let num in obj){
//         if(obj[num] < 2) ans.push(Number(num));
//     }
//     return ans;
// }
// console.log(unique([1,2,3,4,5,1]));






// Prime 
// function prime(n){
//     for(let i=2; i<n; i++){
//         if(n % i == 0){
//             return false
//         }
//     }
//     return true;
// }
// console.log(prime(7));





// Remove Duplicate :
// function removeDuplicate(arr){
//     let ans = [];
//     let obj = {};
//     for(let i = 0; i < arr.length; i++){
//         if(obj[arr[i]]){
//             obj[arr[i]] += 1;
//         }
//         else {
//             obj[arr[i]] = 1;
//         }
//     }
//     console.log(obj);
//     for(let num in obj){
//         if(obj[num] === 1){
//             ans.push(num);
//         }
//     }
//     return ans;
// }

// console.log(removeDuplicate([1,2,3,1,5,6,5,5,9,11]));