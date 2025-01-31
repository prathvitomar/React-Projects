// function a(){
//     let ans = 10;
//     function c(){
//         console.log(ans);
//     }
//     return c;
// }

// const func = a();
// console.log(func)

// {
//     var a = 5;
//     let b = 52;
//     const c = 50;
// }
// console.log(a);
// console.log(b);
// console.log(c);

// function a(){
//     let a = 10
//     var b = 15;
//     if(true){
//         var a = 'name'
//         let b = 5;
//         console.log(a);
//         console.log(b);
//     }
//     console.log(a);
// }
// a();

// console.log(a)
// var a;

// DIFFERENCE BETWEEN MAP AND FOREACH :
// let arr = [3,4,54,12,10];

// let map1 = arr.map(val => val*2).filter(val => val%3==0);           // map returns new Array and also can be chained with other methods
// arr.forEach(val => val/2);                          // only used to do operation on array, doesn't update the real array.
// console.log(map1)
// console.log(arr)

// const map2 = [
//     {name : 'Piyush', rollNumber : 1, marks : 54},
//     {name : 'Prathvi', rollNumber : 5, marks : 91},
//     {name : 'Neha', rollNumber : 21, marks : 85},
//     {name : 'Rebeca', rollNumber : 9, marks : 72},
//     {name : 'Sanjay', rollNumber : 32, marks : 34},
// ]
// const allNames = map2.map(name => name.name.toUpperCase());
// console.log(allNames)

// const moreThan60 = map2.filter(student => student.marks > 60);
// console.log(moreThan60)

// let ans = 0;
// for(let i = 0; i < map2.length;i++){
//     ans += map2[i].marks
// }
// console.log(ans)

// const studentMoreThan60 = map2.filter(student => student.marks > 60).map(student => student.name)
// console.log(studentMoreThan60)

// var x = 10;
// function a(){
//     console.log(x);
//     var x = 5;
// }
// a();

