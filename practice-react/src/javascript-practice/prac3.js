// MISSING NUMBER :
// let arr1 = [1,2,3,5];
// let arr2 = [4,6,7,8,9]
// function missingNumber(arr, num){
//     let ans = [];
//     for(let i = 1; i < num; i++){
//         if(!arr.includes(i)){
//             ans.push(i);
//         }
//     }
//     return ans;
// }
// console.log(missingNumber(arr1, 10));

// Remove underscore and Capatlize next word:
// let str = "my_name_is_prathvi";
// function removeUnderScoreAndCapatlize(str){
//     let ans = str.replaceAll("_", " ").split(" ");
//     for(let i = 0; i < ans.length; i++){
//         ans[i] = ans[i].split('')[0].toUpperCase() + ans[i].slice(1);
//     }
//     console.log(ans.join(" "));
// }
// removeUnderScoreAndCapatlize(str)

// add underscore and make all letters lowercase:
// let str = "My Name Is Prathvi";
// function addUnderScoreAndLowerCase(str){
//     let ans = str.split(" ");
//     for(let i = 0; i < ans.length ; i++){
//         ans[i] = ans[i].toLowerCase();
//     }
//     console.log(ans.join("_"))
// }
// addUnderScoreAndLowerCase(str);

//  Count Occurences in array :
// let arr = [2,2,3,4,1,5,7,7,8,9];
// function countOccurence(arr){
//     let ans = {};
//     for(let i =0; i < arr.length ; i++){
//         if(ans[arr[i]]){
//             ans[arr[i]] +=1;
//         }
//         else{
//             ans[arr[i]] = 1;
//         }
//     }
//     console.log(ans);
// }
// countOccurence(arr);

// Count Targetted field in object :
// let obj = [
//     {name : 'Prathvi', gender : 'male'},
//     {name : 'Neha', gender : 'female'},
//     {name : 'Rebeca', gender : 'female'},
//     {name : 'Garima', gender : 'female'},
//     {name : 'Pragya', gender : 'female'},
//     {name : 'Gappu', gender : 'male'},
// ]

// function countTargetValue(obj, field){
//     let count = 0;
//     for(let i = 0 ; i < obj.length ; i++){
//         if(obj[i].gender === field){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countTargetValue(obj, "female")

// Sort array with age :
// let obj = [
//     {
//         name : 'Prathvi',
//         age : 26
//     },
//     {
//         name : 'Neha',
//         age : 25
//     },
//     {
//         name : 'Rebeca',
//         age : 18
//     },
//     {
//         name : 'Nicole',
//         age : 27
//     },
// ]
// function sortArrayWithField(arr, field){
//     console.log(arr.sort((a,b)=> a[field] - b[field]));
// }
// sortArrayWithField(obj, "age");

// Polyfill of ForEach :
// let arr = [5,10,15,20,25];
// arr.forEach((val) => console.log(val +5));
// console.log(newArr);

// ForEach Polyfill :
// Array.prototype.customForEach = function(cb){
//     for(let i = 0; i < this.length;i++){
//         cb(this[i]);
//     }
// }

// arr.customForEach((val) => console.log(val + 5));

// Map Polyfill :
// let arr = [5,10,15,20,25];
// Array.prototype.myMap = function(cb, index){
//     let ans = [];
//     for(let i = 0; i < this.length ; i++){
//         ans[i] = cb(this[i]);
//     }
//     return ans;
// }
// const mapValues = arr.myMap((val) => val*2);
// console.log(mapValues);

// Filter Polyfill
// let arr = [5,3,10,11,15];
// Array.prototype.myFilter = function(cb){
//     let ans = [];
//     for(let i = 0 ; i < this.length ; i++){
//         if(cb(this[i])) ans.push(this[i]);
//     }
//     return ans;
// }
// const filterValues = arr.myFilter((val) => val%5 == 0);
// console.log(filterValues);

// Find Maximum from string;
// let str = ["145-300-500", "300-780-80", "12-5-4"];
// function maximumNumFromStr(arr){
//     let result = [];
//     for(let  i = 0; i < arr.length; i++){
//         let ans = str[i].split("-").sort((a,b)=> b-a)
//         let newAns = parseInt(ans);
//         result.push(newAns);
//     }
//     return result;
// }
// console.log(maximumNumFromStr(str))

//  Longest Word of string;
// let str = "My name is Prathvi Singh Tomar";
// let str1 = "Earth is third biggest planet of this Universe";
// function longestWord(str){
//     let ans = str.split(" ");
//     let count = 0, result = "";
//     for(let i = 0; i < ans.length; i++){
//         if(count < ans[i].length){
//             count = ans[i].length;
//             result = ans[i];
//         }
//     }
//     console.log(result);
// }
// longestWord(str1);

// Count occurence of given character :
// function countOccurence(arr, char) {
//   let count = 0, newStr = arr.toLowerCase();
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] === char) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countOccurence("PrathvipP", "p")

// function printName(){
//     console.log(this.firstname, this.lastname);
// }

// function printName1(address, city){
//     console.log(this.firstname, this.lastname, city, address);
// }

// let name = {
//     firstname : "Prathvi",
//     lastname : "Tomar",
// }

// let name1 = {
//     firstname : "Neha",
//     lastname : "Parmar",
// }

// let name2 = {
//     firstname : "Pragya",
//     lastname : "Sharma",
// }

// Bind Polyfill :
// let obj1 = {
//   firstName: "prathvi",
//   lastName: "tomar",
// };

// function printInfo(hometown, city) {
//   console.log(this.firstName, this.lastName, hometown, city);
// }

// Function.prototype.myBind = function (...args) {
//   let func = this;
//   return function customBind(...args2) {
//     func.apply(args[0], [...args.slice(1), ...args2]);
//   };
// };
// let info = printInfo.myBind(obj1);
// info("Berasia", "Bhopal");

// Call and Bind Polyfill :
// let name1 = {
//     firstName: "prathvi",
//     lastName: "tomar",
// }

// function printInfo(hometown, city){
//     console.log(this.firstName, this.lastName, hometown, city);
// }

// Function.prototype.myCall = function(...args){
//     let func = this;
//     let leftArgs = args.slice(1)
//     func.call(args[0], ...leftArgs);
// }

// Function.prototype.myApply = function(...args){
//     this.call(args[0], ...args[1]);
// }

// // printInfo.call(name1);
// // printInfo.apply(name1, ["Berasia", "Bhopal"]);
// // printInfo.myCall(name1, "Berasia", "Bhopal");
// printInfo.myApply(name1, ["Berasia", "Bhopal"]);

// function reverse(str){
//     console.log(str.split('').reverse().join(''));
// }
// reverse("prat")

// function removeDuplicate(arr) {
//   // console.log([...new Set(arr)]);
//     let obj = {}, ans =[];
//     for(let i of arr){
//         if(obj[arr[i]]) obj[i] +=1;
//         else obj[arr[i]] = 1;
//     }
//     for(let item in obj){
//         if(obj[item] === 1){
//             ans.push(Number(item));
//         }
//     }
//     console.log(ans);
// }
// removeDuplicate([2, 3, 4, 4, 2, 5, 6, 7, 1]);

// function getCurrentData(){
//     console.log(new Date().toISOString().split('T')[0]);
// }
// getCurrentData()

// Input array => 10, 15, 20, 25, 30. Output array => 10, 25, 45, 70, 100.
// function cummalativeSum(arr){
//     let ans = [arr[0]], i = 0, j = 1;
//     while(j<arr.length){
//         ans.push(ans[i]+arr[j]);
//         i++;
//         j++;
//     }
//     console.log(ans);
// }
// cummalativeSum([10, 15, 20, 25, 30])

// function splitArray(arr, length) {
//   let ans = [];
//   for(let i = 0; i < arr.length; i +=length){
//     console.log(i)
//     ans.push(arr.slice(i, i+length));
//   }
//   console.log(ans)
// }
// splitArray([10, 15, 20, 25, 30, 69,20,78],2);

// “secret_key_one” into camel case results in “secretKeyOne.”
// function camelCase(str){
//     let firstArr = str.split("_").map((letter)=> letter[0].toUpperCase() + letter.slice(1)).join('');
//     console.log(firstArr);
// }
// camelCase("secret_key_one");

// function convertToNumber(str){
//     let alpahabets = "0123456789";
//     for(let l of str){
//         if(!alpahabets.includes(l)) return 0;
//     }
//     return Number(str);
// }
// console.log(convertToNumber("0"));

// function factorial(n){
//     if(n === 1){
//         return n;
//     }
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

