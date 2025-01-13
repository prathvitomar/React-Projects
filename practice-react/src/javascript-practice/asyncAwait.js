

//                                  THIS IS ASYNC AWAIT CODE BELOW :



// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("This is First Promise"), 5000);
// })
// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("This is Second Promise"), 3000);
// })
// async function getData(){
//     const data1 = await p1;
//     // const data2 = await p2;
//     console.log("1st Call")
//     console.log(data1)
//     const data2 = await p2;
//     console.log(data2)
//     console.log("2nd Call")
// }

// const d = getData();
// console.log(d)

// async function getData(){
//     const p = await p1;
//     const pt = await p2;
//     console.log("this is first call")
// }

// async function getDataTwo(){
//     const data2 = await p1;
//     const data1 = await p2;
//     console.log("this is second call")
// }
// getData();
// getDataTwo();











//                                  THIS IS PROMISE APU CODE BELOW : 


// const p1 = new Promise((resolve, reject)=>{
//     // setTimeout(()=> resolve("This is First Promise"), 5000);
//     setTimeout(()=> reject("REJECTED First Promise"), 5000);

// })
// const p2 = new Promise((resolve, reject)=>{
//     // setTimeout(()=> resolve("This is Second Promise"), 3000);
//     setTimeout(()=> reject("REJECTED Second Promise"), 3000);
// })
// const p3 = new Promise((resolve, reject)=>{
//     // setTimeout(()=> resolve("This is Third Promise"), 10000);
//     setTimeout(()=> reject("REJECTED Third Promise"), 10000);
// })

// Promise.all([p1, p2,p3]).then((data)=> console.log(data)).catch((err)=> console.log(err));
// Promise.allSettled([p1, p2,p3]).then((data)=> {
//     data.map(d =>{
//         if(d.status == 'fulfilled'){
//             console.log(d);
//         }
//     })
// }).catch((err)=> console.log(err));

// Promise.race([p1, p2, p3]).then(data => console.log(data)).catch((err)=> console.log(err));
// Promise.any([p1, p2, p3]).then(data => console.log(data)).catch((err)=> console.log(err.errors));








