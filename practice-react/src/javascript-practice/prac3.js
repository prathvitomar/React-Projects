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