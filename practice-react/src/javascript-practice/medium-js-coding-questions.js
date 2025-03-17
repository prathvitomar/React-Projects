// Reverse String :
// let str = "prathvi";
// function reverseString(str){
//     console.log(str.split('').reverse().join(""));
// }
// reverseString(str);

// Remove Duplicate :
// let str = "ppratt";
// function removeDuplicate(str){
//     console.log([...new Set(str)].join(''))

//     Another Approach :
//     let ans = "";
//     for(let i = 0; i < str.length ; i++){
//         if(ans.includes(str[i])) continue;
//         else ans += str[i];
//     }
//     console.log(ans);
// }
// removeDuplicate(str);

//                         // Get Current Date :
// function getCurrentDate(){
//     let date = new Date();
//     console.log(date.toISOString().split("T")[0]);
// }
// getCurrentDate();

//  Calculate Cummalative Sum :
// let arr = [10, 15, 20, 25, 30]
// function cummalativeSum(arr){
//     let ans = [arr[0]];
//     for(let i = 1; i < arr.length ; i++){
//             ans[i] = ans[i-1] + arr[i]
//     }
//     console.log(ans);
// }
// cummalativeSum(arr)

//  Split Array into chunk of specified size :
// let arr = [1,2,3,4,5,6,7,23,4,54,6,23,8,7,9,0,12,31];
// function splitChunks(arr,num){
//     console.log(Array.from({length : Math.ceil(arr.length/num)}, (_,i)=> arr.slice(i*num, i*num+num)))
// }
// splitChunks(arr,5)

// Longest Consecutive Sequence :
// function longestConsecutiveSeq(arr){
//     // [10, 11, 12, 1, 2, 3, 4]
//     let max = 0, count=1;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i+1] === arr[i]+1){
//             count++;
//         }
//         else {
//             count = 1;
//         }
//         if(count>max){
//             max = count;
//         }
//     }
//     console.log(max);
// }
// longestConsecutiveSeq([10,1, 2, 3, 4])

// Underscore and hyphens

// let str = "secret_key_one";
// function convertCamelCase(str){
//     let ans = str.split("_");
//     let newStr = ans.map((s,i)=> s[0].toUpperCase() + s.slice(1));
//      console.log(newStr.join(" "))
// }
// convertCamelCase(str)

//  Swap Variables :
// [a,b] = [b,a]

//  Start Countdown from a given number :
// const timer = (n) => Array.from({length : n}, (_,i) => n-i)
// console.log(timer(10));

//  Convert string to integers :
// function convertStringToIntegers(str){
//     let alphabets = "abcdefghijklmnopqrstuvwxyz", ans = "";
//     if(str.includes(alphabets) || str.length === 0){
//         console.log(0)
//         return;
//     };
//     for(let  i = 1; i <= 9;i++){
//         let num = JSON.stringify(i)
//         if(str.includes(num)) ans += i;;
//     }
//     let newAns = parseInt(ans)
//     console.log(newAns);
// }
// convertStringToIntegers("007");

//  Find Factorial of Number using Recursion:
// function recursionFactorial(num){
//     if(num === 0) return 1;
//     return num *recursionFactorial(num-1);
// }
// console.log(recursionFactorial(3));

//      Access deeply nested property without throwing error :
// let name = {
//     firstname : 'prathvi',
//     lastname : 'tomar',
//     age : {
//         maturity : "YESsss"
//     }
// }
// let accessProp = (obj, props) => props.split('.').reduce((acc,curr) => acc && acc[curr], obj);
// console.log(accessProp(name, "age.maturity"))

//  Generate Random between min and max :
// function generateRandom(min, max){
//     return Math.floor(Math.random()* (max-min+1)) + min;
// }
// console.log(generateRandom(5,10));

// Most Occurences in a array
// function mostOccurences(arr){
//     // let newArr = [...new Set(arr)];
//     // console.log(newArr)
//     let obj = {};
//     for(let item of arr){
//         obj[item] = (obj[item] || 0) + 1;
//     }
//     console.log(obj);
// }
// mostOccurences([1,1,2,4,3,2,1,4,3,7]);

// Capatlize first letter :
// function capatlizeLetter(str){
//     console.log(str[0].toUpperCase() + str.slice(1));
// }
// capatlizeLetter("earth")

//  Find Longest word in a string :
// function longestWordString(str){
//     let newStr = str.split(" ");
//     let max = 0, ans = "";
//     for(let string of newStr){
//         if(string.length > max){
//             max = string.length;
//             ans = string;
//         }
//     }
//     console.log(max, ans);
// }
// longestWordString("prathvi is the most handsome man of this planet")

//          rename specific prop of object
// const person = { firstName: 'John', lastName: 'Doe', age: 30 };
// function renameProp(obj, oldKey, newKey){
//     if(!obj[oldKey]) return obj;
//     obj[newKey] = obj[oldKey];
//     delete obj[oldKey]
//     return obj;
// }
// let newObj = renameProp(person, "firstName", "pehlaNaam");
// console.log(newObj);

//      Find second largest value in array:
// function secondLargest(arr){
//     let max = 0, secondMax = 0;
//     for(let val of arr){
//         if(val>max){
//             secondMax = max;
//             max = val;
//         }
//         else if(val > secondMax){
//             secondMax = val;
//         }
//     }
//     console.log(secondMax);
// }
// secondLargest([2,32,524,11,666]);

//  Group array by specific property :
// const people = [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 3, name: 'zayn', age: 28 },
//     { id: 2, name: 'Bob', age: 30 },
//   ];
// function groupProperty(arr, prop){
//     return arr.sort((a,b)=> a[prop] - b[prop]);
// }
// console.log(groupProperty(people, "id"))
// function groupByProperty(array, key) {
//   return array.reduce((result, item) => {
//       const groupKey = item[key]; // Get the value of the specified key
//       if (!result[groupKey]) {
//           result[groupKey] = []; // Initialize an empty array for new groups
//       }
//       result[groupKey].push(item); // Add the object to the correct group
//       return result;
//   }, {});
// }
// console.log(groupByProperty(people, "name"))

//   Check missing number:
// function missingNumber(arr){
//   for(let i = arr[0]; i < arr[arr.length-1] ; i++){
//     if(!arr.includes(i)){
//       console.log(i);
//       return;
//     }
//   }
// }
// missingNumber([4,5,6,9])

//  Reverse Key value pair :
// const originalObject = { a: 1, b: 2, c: 3 };
// function reverseKeyValue(obj){
//   let keys = Object.keys(obj), values = Object.values(obj), ans ={};
//   for(let i = 0; i < keys.length; i++){
//       ans[values[i]] = keys[i]
//   }
//   console.log(ans);
// }
// reverseKeyValue(originalObject);

//  Balanced Paranthesis :
// function BalancedParenthesis(str){
//   return str.split('').reverse().join('') === str
// }
// console.log(BalancedParenthesis("2abcba2"))

//  Debouncing :

// function deBouncing(func, delay) {
//   let timer;
//   return function(...args){
//   setTimeout(() => {
//     clearTimeout(timer);
//     func(...args);
//   }, delay);
// }

// }
// let name1 = deBouncing((args) => console.log(args), 2000);
// name1("Prathvi");
// let name2 = deBouncing((args) => console.log(args), 1000);
// name2("Tomar");



//  Append "..." if length exceeds :
// function appendDots(str, maxLength){
//   let ans = "";
//   for(let i = 0; i < maxLength ; i++){
//     ans += str[i];
//   }
//   return ans += "...";
// }
// console.log(appendDots("prathvi singh", 7));




//  Throttling :
// const throttle = (func, delay) => { 
//   let throttled = false;  // Flag to track whether function is allowed to run
  
//   return (...args) => {   // Return a new function that wraps the original
//     if (!throttled) {     // If function is NOT throttled (allowed to run)
//       func(...args);      // Call the function
//       throttled = true;   // Set throttled flag to true
      
//       setTimeout(() => throttled = false, delay); // Reset flag after delay
//     }
//   }
// };



//  All Unique Characters :
// function uniqueCharacters(str){
    // let obj = {};
    // for(let val of str){
    //   obj[val] = (obj[val]||0) + 1;
    // }
    // for(let item in obj){
    //   if(obj[item]>=2) return false;
    // }
    // return true;
    // return new Set(str).size === str.length;           - Another Approach with Easy way.
// }
// console.log(uniqueCharacters("prathi"))