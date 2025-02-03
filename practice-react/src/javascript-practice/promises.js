// function isValidate(cart){
//     return true;
// }
// function createOrder(cart){
//     const promise = new Promise((resolve, reject) =>{
//         if(!isValidate(cart)){
//             const err = new Error("Invalid Cart Detail");
//             return reject(err);
//         }
//         resolve("12345");
//     })
//     return promise;
// }

// function orderSuccess(orderId){
//     return new Promise((resolve, reject)=>{
//         return resolve("Order Successfully Placed");
//     })
// }


// createOrder("cart").then((orderId)=>{
//     console.log(orderId);
//     return orderId;
// }).then((orderId)=>{
//     return orderSuccess(orderId);
// })
// .then((successMessage)=>{
//     console.log(successMessage)
// })
// .catch((errorMessage)=> console.log(errorMessage.message));


// const p = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Promise Resolved");
//     },2000)
// })
// p.then((res) => console.log(res)).catch((err) => console.log(err));


// function cartDetails(promise){
//     return new Promise((resolve, reject)=> resolve("Cart Created Successfully with id : " + promise));
// }

// function createCart(){
//     const pr = new Promise((resolve, reject)=>{
//         if(!availableCart){
//             const err = new Error("Cart not available")
//             return reject(err);
//         }
//         let id= "Prathvi123";
//         setTimeout(()=>{
//             return resolve(id)
//         },2000)
//     })
//     return pr;
// }

// function availableCart(){
//     return true;
// }


// createCart().then((res)=>{ 
//     console.log(res)
//     return res;
// }).then((pr)=>{
//     return cartDetails(pr);
// }).then((pr)=>{
//     console.log(pr)
// }).catch((err)=> console.log(err))

// -------------------------------------------------------
// console.log("Start")

// const p = new Promise((resolve, reject)=>{
//     console.log(1);
//     resolve(2);
//     console.log(3);
// })

// p.then((res)=>console.log(res));

// console.log("End")
// OUTPUT : Start 1 3 End 2
// ---------------------------------------------------------------------------------------------------------

// console.log("Start")
// const p = new Promise((resolve, reject)=>{
//     console.log(1);
//     console.log(3);
// })
// p.then((res)=>console.log(res));
// console.log("End")
// OUTPUT : Start 1 3 2.        Output is this because we didn't resolve the promise so res is not printed.
// ---------------------------------------------------------------------------------------------------------

// console.log("start")
// function fn(){
//     return new Promise((resolve, reject)=>{
//         console.log(1);
//         resolve("Success")
//     })
// }
// console.log("middle")

// fn().then(res => console.log(res))

// console.log("end")
// OUTPUT : start middle 1 end sucess
// ---------------------------------------------------------------------------------------------------------

// const p = new Promise((resolve, reject)=>{
//     reject()
// })
// p.then((res)=> console.log("This is First Promise"))
// .then((res)=> console.log("This is 2 Promise"))
// .then((res)=> console.log("This is 3 Promise"))
// .catch((res)=> console.log("This is Error 1"))
// .then((res)=> console.log("This is Finallllllllll Promise"))
// OUTPUT : This is Error 1     This is Finalllllllllll Promise
// ---------------------------------------------------------------------------------------------------------


// const p1 = new Promise((resolve, reject)=>{
//     resolve("First")
// })

// const p2 = new Promise((resolve, reject)=>{
//     resolve("Second")
// })

// p1.then((res)=> {
//     console.log(res)
//     return p2;
// }).then((res)=>{
//     console.log(res)
// })
// ---------------------------------------------------------------------------------------------------------

// async function loadJson(){
//     try {
//         const data = await fetch(`https://fakeurl.com/no-such-user.json`)
//         const res = await data.json()
//         return res
//     } catch (error) {
//         // throw new Error(`Failed to load : ${error.message}`)        
//         console.log(error)
//     }
// }

// const p = loadJson();
// console.log(p)




// const cart =  () =>{
//     return new Promise((resolve, reject)=>{
//         resolve(12345);
//     })
// }

// const availableCart = () => {
//     return true;
// }

// const orderProduct = (promise) => {
//     let p = new Promise((resolve, reject) => {
//         if(availableCart()){
//             promise().then(resolve).catch(reject);
//         }
//         else{
//             reject("Promise rejected")
//         }
//     })
//     return p;
// }

// orderProduct(cart).then(data => console.log(data)).catch(err => console.log(err));


// const p1 = new Promise((resolve, reject) => setTimeout(()=> reject("First Promise Resolved"), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(()=> resolve("Second Promise Resolved"), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(()=> resolve("Third Promise Resolved"), 3000));

// const promiseAll = Promise.all([p1,p2,p3]).then((res) => console.log(res)).catch((err) => console.log(err));



// const p1 = new Promise((resolve, reject) => setTimeout(()=> reject("First Promise Resolved"), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(()=> reject("Second Promise Resolved"), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(()=> resolve("Third Promise Resolved"), 3000));

// const promiseAllSettled = Promise.allSettled([p1,p2,p3]).then((res) => console.log(res));



// const p1 = new Promise((resolve, reject) => setTimeout(()=> reject("First Promise Resolved"), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(()=> reject("Second Promise Resolved"), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(()=> reject("Third Promise Resolved"), 3000));

// const promiseRace = Promise.race([p1,p2,p3]).then((res) => console.log(res)).catch((err) => console.log(err));


// const p1 = new Promise((resolve, reject) => setTimeout(()=> resolve("First Promise Resolved"), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(()=> reject("Second Promise Resolved"), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(()=> reject("Third Promise Resolved"), 3000));

// const promiseAny = Promise.any([p1,p2,p3]).then((res) => console.log(res)).catch((err) => console.log(err));