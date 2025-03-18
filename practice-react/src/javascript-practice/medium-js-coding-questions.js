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

// // Find first repeating letter from string :
// function findFirstRepeating(str){
//   let newStr = str.split(''), obj ={};
//   console.log(newStr);
//   for(let i = 0; i < newStr.length; i++){
//     if(obj[str[i]]) return str[i];
//     else obj[str[i]] = 1;
//   }
// }
// console.log(findFirstRepeating("praa"));

//  Flatten array :
// const o = { a: 1, b: { c: 2, d: { e: 3 } } };
// const flattenObject = (obj) =>
//   Object.assign({}, ...(function flattenObj(o) {
//     return [].concat(...Object.keys(o).map(k =>
//       typeof o[k] === 'object' ? flattenObj({ [k]: o[k] }) : { [k]: o[k] }
//     ))
//   })(obj));

// Rotate Array :
// function rotateArray(arr, num){
//   return [...arr.slice(num), ...arr.slice(0, num)];
// }
// console.log(rotateArray([1,2,3,4,5,6], 2))

// Convert Minutes into hours and minutes:
// function minuteToHours(minutes){
//   // 250;
//   let hours = Math.floor(minutes/60);
//   let minute = minutes - hours*60;
//   return `${hours} Hours and ${minute} Minutes`
// }
// console.log(minuteToHours(250))

//  Generate Random Password of Specific Length :
// function generatePassword(length){
//   let alphabets = 'abcdefghijklmnopqrstuvwxyz';
//   let numbers = "1234567890";
//   let password = "";
//   for (let i = 0; i < length; i++) {
//       let isAlphabet = Math.random() < 0.5
//       if(password.length === length){
//         return;
//       }
//       if(isAlphabet){
//         let index = Math.floor(Math.random()*10)
//         password = (password + numbers[index]);
//       }
//       else{
//         let index = Math.floor(Math.random()*10)
//         password = (password + alphabets[index]);
//       }
//   }
//   console.log(password);
// }
// generatePassword(9)

// Balanced Brackets :
// function balancedBrackets(str){
//   // [{}];
//   let stack = [];
//   let obj = {
//     ']' : '[',
//     '}' : '{',
//     ')' : '(',
//   }
//   for(let i of str){
//     console.log(i)
//     if(i === '[' || i === '{' || i === '('){
//       stack.push(i);
//     }
//     else{
//       if(stack[stack.length - 1]!== obj[i]){
//         return false;
//       }
//       stack.pop();
//     }
//   }
//   return stack.length === 0
// }
// console.log(balancedBrackets("({[})"));

//  Return Delayed promise after delayed time :
// function resolvePromise(delay){
//     let promise = new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve("Promise Resolved");
//         },delay)
//     })
//     return promise;
// }
// resolvePromise(2000).then((data)=> console.log(data))

//  Convert Object into Query String :
// function objectToQueryString(obj){
//     let ans = "";
//     let keys = Object.keys(obj);
//     let values = Object.values(obj).map((a) => (typeof a === "string" ? a.replaceAll(" ", "%20") : a));
//     for(let i = 0; i < keys.length;i++){
//         ans === "" ?  ans +=`${keys[i]}=${values[i]}` : ans =  ans + `%${keys[i]}=${values[i]}`;
//     }
//     console.log(ans);
// }
// const o = { name: 'John Doe', age: 30, city: 'Example City' };
// Expected :- 'name=John%20Doe&age=30&city=Example%20City'
// const qs = objectToQueryString(o);

//  Check Object properties :
// function haveSameProperties(obj1, obj2){
//     let ob1 = JSON.stringify(Object.keys(obj1).sort())
//     let ob2 = JSON.stringify(Object.keys(obj2).sort())
//     console.log(ob1)
//     console.log(ob2)
//     return ob1 === ob2;
// }
// const o1 = { name: 'John', age: 30, city: 'Example City' };
// const o2 = { age: 30, name: 'John', city: 'Example City' };
// console.log(haveSameProperties(o1, o2));

// //  Count Occurence of each letter :
// function countWordOccurrences(letter){
//     let words = letter.split(" ");
//     let obj = {};
//     for(let i = 0; i < words.length; i++){
//         obj[words[i]] = (obj[words[i]] || 0) + 1;
//     }
//     console.log(obj)
// }
// const s = 'the quick brown fox jumps over the lazy dog jumps over the fence';
// const r = countWordOccurrences(s);
// console.log(r);

// Return cache function which returns if value matches :
// function createCache(cb){
//     let cacheValues = {};
//     return function(...args){
//         if(cacheValues[args]){
//             console.log("CACHE RETURNED")
//             return cacheValues[args];
//         }
//         else{
//             console.log("NEW VALUE STORED")
//             cacheValues[args] = [...args]
//             console.log(cacheValues);
//             return cb(...args);
//         }
//     }
// }
// const add = (a, b) => a + b;
// const cachedAdd = createCache(add);

// console.log(cachedAdd(2, 3));
// console.log(cachedAdd(2, 3));

//  Return array with random number:
// function generateRandomNumber(length){
//     return new Array(length).fill("").map((_)=> Math.floor(Math.random() * 10))
// }
// console.log(generateRandomNumber(5));

// Create Event Emitter :
// const createEventEmitter = function () {
//   let stack = {};
//   return {
//     on: (eventName, listener) => {
//         if(stack[eventName]){
//             stack[eventName].push(listener);
//           }
//           else{
//             stack[eventName] = [listener];
//           }
//     },
//     off: (eventName, listener) => {
//         stack[eventName] = stack[eventName].filter((_)=> _ === eventName);
//     },
//     emit: (eventName, listener) => {
//         if(stack[eventName]){
//             stack[eventName].push(listener);
//           }
//           else{
//             stack[eventName] = [listener];
//           }
//     },
//   };
// };
// const eventEmitter = createEventEmitter();
// eventEmitter.on();

// const greetListener = (name) => console.log(`Hello, ${name}!`);
// eventEmitter.on('greet', greetListener);

// eventEmitter.emit('greet', 'Alice'); // Output: 'Hello, Alice!'
// eventEmitter.off('greet', greetListener);

// eventEmitter.emit('greet', 'Bob'); // No output (listener removed)

// Create Queue with dequeue and enqueue :
// const queue = () => {
//     let stack = [];
//     return {
//         remove : function(){
//               return stack.pop();
//         },
//         enqueue : function(args){
//             stack.push(args)
//         },
//         dequeue : function(args){
//             stack.shift(args)
//         },
//         get : function(){
//             return stack;
//         }
//     }
// }
// let s = queue();
// s.enqueue(2)
// s.enqueue(23)
// s.enqueue(32)
// console.log(s.get());
// console.log(s.remove());
// console.log(s.get());

//  Create Stack Data Strcuture :
// function stacks(){
//     let stack = [];
//     return {
//         push : (args) => {
//             stack.push(args)
//         },
//         pop : (args) => {
//             return stack.pop()
//         },
//     }
// }
// let st = stacks();
// st.push(2)
// st.push(45)
// console.log(st.pop())
