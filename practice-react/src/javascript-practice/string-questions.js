// Reverse String :
// let str = 'name';
// function reverseStr(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseStr(str))




// Palindrome Check :
// let str = 'name';
// let str2 = 'noon';
// function palindrome(string){
//     let newStr = string.split('');
//     let i = 0, e = newStr.length -1;
//     while(i < e) {
//         if(newStr[i] === newStr[e]){
//             i++;
//             e--;
//         }
//         else{
//             return false;
//         }
//     }
//     return true;
// }
// function palindrome(string){
//     let newStr = string.split('').reverse().join('');
//     if(string === newStr) return true;
//     return false;
// }
// console.log(palindrome(str2))





// Count vowels;
// let alphabets = 'prathvi tomar';
// function countVowels(str){
//     let strin = str.split('');
//     let vowels = ['a','e','i','o','u'];
//     let count = 0;
//     for(let i = 0; i < strin.length; i++) {
//         if(vowels.includes(strin[i])) count += 1;
//     }
//     return count;
// }
// console.log(countVowels(alphabets))




// // Check Anagram :
// let str = 'name';
// let str2 = 'maen';
// function isAnagram(str1,str2) {
//     return (str1.split('').sort().join('') === str2.split('').sort().join(''));
// }
// console.log(isAnagram(str, str2))




// Remove duplicate from string :
// let str = 'nanosece';
// function removeDuplicate(str) {
//     let newStr = str.split('');
//     let result = [];
//     let isDuplicate = false;
//     for (let i = 0; i < newStr.length; i++) {
//         isDuplicate = false;
//         for (let j = i + 1; j < newStr.length; j++) {
//             if(newStr[j] === newStr[i]) isDuplicate = true;
//         }
//         if(!isDuplicate) result.push(newStr[i]); 
//     }
//     return result.join('');
// }
// console.log(removeDuplicate(str));




// Remove duplicate Letters from a string;
// let str = 'nanosece';
// function removeDuplicateCompletely(str) {
//     let obj = {};
//     let results = [];
//     for(let i = 0; i < str.length; i++) {
//         if(obj[str[i]]){
//             obj[str[i]]++;
//         }
//         else{
//             obj[str[i]] = 1;
//         }
//     }
//     for(let key in obj){
//         if(obj[key] === 1) results.push(key);
//     }
//     return results.join('');
// }
// console.log(removeDuplicateCompletely(str));






// Capitalize First Word;
// let str = "neha parmar";
// function capatalizeFirstWord(str){
//     return str.split(' ').map((letter)=> letter.charAt(0).toUpperCase() + letter.slice(1)).join(' ');
// }
// console.log(capatalizeFirstWord(str))




// String Compression :
// let str = 'aaabbcd';
// function compressing(string){
//     let newStr = string.split('');
//     let obj = {};
//     let ans = '';
//     for(let i=0; i<newStr.length; i++){
//         if(obj[newStr[i]]){
//             obj[newStr[i]] += 1;
//         }
//         else{
//             obj[newStr[i]] = 1;
//         }
//     }
//     for(let key in obj){
//         ans += (key + obj[key]);
//     }
//     return ans;
// }
// console.log(compressing(str));





// Rotate String :
// let str = 'abcdef';
// function rotate(str, val){
//     let newStr = str.split(''), first = "", second = "";
//     for(let i = 0; i < val; i++){
//         first += newStr[i]
//     }
//     for(let i = val; i < newStr.length; i++){
//         second += newStr[i]
//     }
//     return second+first;
// }
// function rotate(str, val){
//     let newStr = str.split('');         // a b c d e f;
//     let first = str.substr(0, val);
//     let second = str.substr(val, newStr.length-1);
//     return second + first;
// }
// console.log(rotate(str,4));




//  Longest Substring without repeating characters :
// let str = 'abcabcbc';
// function longestSubstringWithoutRepeating(str) {
//     let longest = '';
//     let current = '';
//     for (let char of str) {
//       if (current.includes(char)) {
//         current = current.slice(current.indexOf(char) + 1);
//       }
//       current += char;
//       if (current.length > longest.length) {
//         longest = current;
//       }
//     }
//     return longest;
// }
// console.log(longestSubstringWithoutRepeating('abcabcbb'));




// String to Number :
// function stringToNumber(str){
//     let ans = parseInt(str);
//     console.log(typeof ans);
//     return ans;
// }
// console.log(stringToNumber('43'));




// First Unique Character of string :
// function uniqueCharInString(str){
//     let charSet = {};
//     for(let key of str){
//         if(charSet[key]) charSet[key] += 1;
//         else charSet[key] = 1;
//     }
//     for(let key in charSet){
//         if(charSet[key] === 1) return key;
//     }
// }
// console.log(uniqueCharInString("aeadvf"))





// String to CamelCase :
// function stringToCamelCase(str){
//     let newStr = str.split('-');
//     let ans =[];
//     for(let i = 0; i < newStr.length; i++){
//         if(i === 0) ans.push(newStr[0]);
//         else{
//             ans.push(newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1));
//         }
//     }
//     return ans.join('');
// }
// console.log(stringToCamelCase("my-name-house"))






// Valid Parenthesis :
// function validParenthesis(str) {
//     let stack = [];
//     let bracketMap = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };
//     for (let char of str) {
//         if (char === '(' || char === '{' || char === '[') {
//             stack.push(char); // Push opening bracket
//         } else if (char === ')' || char === '}' || char === ']') {
//             // If stack is empty or top of stack doesn't match current closing bracket, return false
//             if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0; // If stack is empty, brackets are balanced
// }
// console.log(validParenthesis("(){}[]")); // true
// console.log(validParenthesis("({[]})")); // true
// console.log(validParenthesis("({[})")); // false
// console.log(validParenthesis("({[]}")); // false






