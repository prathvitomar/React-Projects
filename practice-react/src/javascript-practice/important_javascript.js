// is Anagram :
// function isAnagram(str1, str2){
//     let newStr = str1.toLowerCase().split('').sort().join('');
//     console.log(newStr);
//     let newStr2 = str2.toLowerCase().split('').sort().join('');
//     console.log(newStr2);
//     if(newStr === newStr2){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isAnagram("Prathvi", "ivtharp"));




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




// Recursion Factorial:
// function recursionFactorial(n){
//     if(n <= 1) return n;
//     return n * recursionFactorial(n-1);
// }
// console.log(recursionFactorial(3));



//  sort two merged array :
// function sorted(arr1, arr2){
//     const res = [...arr1,...arr2];
//     const ans = res.sort((a,b)=> a - b);   
//     return ans;

// }
// console.log(sorted([2,43,1,76,32],[9,4,10,17,2]));



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




// Prime Number :
// function prime(num){
//     for(let i=2; i<num; i++){
//         if(num%i===0) return false;
//     }
//     return true;
// }
// console.log(prime(11))


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


// Palindrome :
// function isPalindrome(str){
//     if(str === str.split('').reverse().join('')) return true;
//     else return false;
// }
// console.log(isPalindrome("ab"));





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






// Remove first element from array :
// function removeFirstElement(arr){
//     return arr.slice(1);
// }
// console.log(removeFirstElement([1,2,4,5,6]));




