                        //   OBJECTS :



// const a1 = (function(a){
//     delete a;
//     return a;
// })(5);
// console.log(a1);

// const a = "surname";
// const a2 = "tomar";

// let user = {
//     name: 'prathvi',
//     surname : 'tomar',
//     age : 25,
//     "like this video" : true
// }
// delete user["like this video"]
// console.log(user["like this video"]);
// user  = {...user, [a] : a2};
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// for(let keys in user){
//     console.log(keys);
//     console.log(user[keys]);
// }

// let obj = {
//     a : 2,
//     b : 4,
//     c : {
//         name : 'John',
//         surname : 'Doe',
//         d : {
//             home : 'Bhopal'
//         }
//     }
// }
// function multipleNumBy2(obj){
//     let num = {}
//     for(let key in obj){
//         if(typeof obj[key] === "number"){
//             num[key] = obj[key]*2;
//         }
//     }
//     return num;
// }
// console.log(multipleNumBy2(obj))
// const {a: firstValue , b} = obj;
// console.log(firstValue, b);

// const {c : {name, d : {home}}} = obj;
// console.log(name, home);

// const obj = { text : 'Hey'};
// const obj2 = {...obj};
// obj.text = 'Hello';
// obj2.text = 'Bye';
// console.log(obj)
// console.log(obj2)

// let name = { a : 'lydia'};
// let arr = [name];
// name.a = null;
// console.log(arr)






                        //   CLOSURES :




// function a(){
//     var name = 'a';
// }
// {
//     var name2 = 'a';
// }
// console.log(name2)

// function a(){
//     let count = 0;
//     const add = (val)=>{
//         return count+val;
//     }
//     const sub = (val)=>{
//         return count-val;
//     }
//     return {
//         add,
//         sub
//     }
// }
// const d = a();
// console.log(d.add(3))
// console.log(d.add(10))
// console.log(d.sub(10))

// let a = 5;
// function b(b){
//     return function(c){
//         return function(a){
//             return a + b + c;
//         }
//     }
// }
// console.log(b(3)(4)(a));

// function createBase(value){
//     return function(secondVal){
//         return value + secondVal;
//     }
// }
// const a = createBase(6);
// console.log(a(10));
// console.log(a(14));

function counter(){
    let count = 0;
    function increment(){
        return count++;
    }
    function decrement(){
        return count--;
    }
    return {
        increment, decrement
    }
}
const a = counter();
console.log(a.increment())
console.log(a.increment())
console.log(a.decrement())
console.log(a.decrement())
