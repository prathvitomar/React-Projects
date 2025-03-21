//                  CREATING POLYFILLS FOR JAVASCRIPT METHODS :

// Array.prototype.myMap = function(cb){
//     let result = [];
//     for(let i = 0; i < this.length;i++){
//         result[i] = cb(this[i]);
//     }
//     return result;
// }
// let m = [1,2,3,4,5].myMap((_)=> _+3);
// console.log(m);

// Array.prototype.myFilter = function(cb){
//     let result =[];
//     for(let i = 0; i < this.length;i++){
//         if(cb(this[i])){
//             result.push(this[i]);
//             console.log(this[i]);
//         }
//     }
//     return result;
// }
// let f = [2,3,4,5,6].myFilter((_) => _ % 2 ===0);
// console.log(f);

// let obj = { name : "Prathvi Singh Tomar", age : 28};
// function printCall(address, city){
//     console.log(this.name , this.age, address, city);
// }
// Function.prototype.myCall = function(context = {},...args){
//     context.fn = this;
//     context.fn(...args);
// }
// printCall.myCall(obj, "Berasia", "Bhopal");

// let obj = { name : "Prathvi Singh Tomar", age : 28};
// function printCall(address, city){
//     console.log(this.name , this.age, address, city);
// }
// Function.prototype.myApply = function(context = {}, args){
//     context.fn = this;
//     context.fn(...args);
// }
// printCall.myApply(obj, ["Berasia", "Bhopal"]);

// let obj = { name : "Prathvi Singh Tomar", age : 28};
// function printCall(address, city, country){
//     console.log(this.name , this.age, address, city, country);
// }
// Function.prototype.myBind = function(context = {}, args){
//     context.fn = this;
//     return function(...newArgs){
//         context.fn(...args, ...newArgs);
//     }
// }
// let customBind = printCall.myBind(obj, ["Berasia", "Bhopal"]);
// customBind("India");

// Array.prototype.myReduce = function(cb, initialValue){
//     let ans = initialValue;
//     for(let i = 0; i < this.length;i++){
//         ans = ans ? cb(ans,this[i]) : this[i];
//     }
//     return ans;
// }
// let r = [2,3,4,5,6].myReduce(((acc, curr) => acc = acc + curr),0);
// console.log(r);

// function once(func, context){
//     let ran;
//     return function(){
//         if(func){
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }
//         return ran;
//     }
// }

// let hello = once((a,b)=> console.log("Hello", a,b));
// hello();
// hello();
// hello();
// hello();

//     MEMOIZED FUNCTION :
// function callBack(num1, num2) {
//   for (let index = 0; index < 1000000000; index++) {}
//   return num1 * num2;
// }
// function memoized(cb) {
//   let cache = {};
//   console.log(cache);
//   return function (...args) {
//     let name = JSON.stringify(args);
//     if (!cache[name]) {
//       let result = cb(...args);
//       cache[name] = result;
//       console.log("New Value Added in Cache", cache[name]);
//     } else {
//         console.log("Cache Return", cache[name]);
//       return cache[name];
//     }
//   };
// }
// let memo = memoized(callBack);
// memo(2, 3);
// memo(4, 3);
// memo(2, 3);
// memo(4, 3);

//  PROMISE POLYFILL :

// function myPromise(executor) {
//   let onResolve,
//     onReject,
//     isFullfilled = false,
//     isReject = false,
//     called = false, value;

//   function resolve(val) {
//     isFullfilled = true;
//     value = val;
//     if (typeof onResolve === "function") {
//       onResolve(value);
//     }
//   }

//   function reject(val) {
//     isReject = true;
//     value = val;
//     if(typeof onReject === "function"){
//         onReject(value);
//     }
//   }

//   this.then = function (callBack) {
//       onResolve = callBack;
//     if (isFullfilled && !called) {
//       called = true;
//       onResolve(value);
//     }
//     return this;
//   };

//   this.catch = function (callBack) {
//     onReject = callBack;
//     if(isReject && !called){
//         called = true;
//         onReject(value);
//     }
//     return this;
//   };
//   executor(resolve, reject);
// }

// let pr = new myPromise((resolve, reject) => {
//     resolve("Promise Resolved");
//     reject("Error Happened");
// });
// pr.then((res) => console.log(res)).catch((err) => console.log(err));

// PROMISE ALL POLYFILL :
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved 1");
//   }, 2000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved 2");
//   }, 2000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved 3");
//   }, 2000);
// });

// Promise.myPromiseAll = function (promises) {
//   if (promises.length <= 0) {
//     console.log("Please Provide Promises");
//     return;
//   }
//   return new Promise((resolve, reject) => {
//     let result = new Array(promises.length);
//     let completedPromises = 0;
//     promises.forEach((prom, idx) => {
//       prom
//         .then((res) => {
//           result[idx] = res;
//           completedPromises++;
//           if (completedPromises === promises.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// };
// Promise.myPromiseAll([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// Debouncing :

// function debouncing(cb, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         setTimeout(()=> cb(...args), delay);
//     }
// }

// function printName(name, age){
//     console.log(`Printttttt ${age} and ${name}`);
// }
// let cb = debouncing(printName, 2000);
// cb(26, "Prathvi");


// Throttling :
// function printName(name, age) {
//     console.log(`Printttttt ${age} and ${name}`);
//   }
  
//   function throttling(cb, delay) {
//     let lastRan = 0;
//     let timer;
  
//     return function (...args) {
//       let timeNow = new Date().getTime();  
//       if (timeNow - lastRan >= delay) {
//         cb(...args);
//         lastRan = timeNow; 
//       } else {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//           cb(...args);
//           lastRan = new Date().getTime(); 
//         }, delay - (timeNow - lastRan));
//       }
//     };
//   }
  

//   let throttledPrint = throttling(printName, 4000);
  
//   throttledPrint(26, "Prathvi"); 
//   throttledPrint(27, "John");    
//   setTimeout(() => throttledPrint(28, "Doe"), 2000); 
//   setTimeout(() => throttledPrint(29, "Smith"), 5000); 
  