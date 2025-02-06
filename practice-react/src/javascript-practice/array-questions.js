// Reverse array;
// let arr = [1,2,3,4,5,6];
// let arr2 = [];
// console.log(arr.reverse());
// for(let i = arr.length - 1; i > 0; i--){
//     arr2.push(arr[i]);
// }
// console.log(arr2);


// Sum of all elements:
// let sum = 0;
// let arr = [1,2,3,4,5,6];
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum)



// Find the maximum:
// let arr = [111,20,3,14,5,6];
// let max = -Infinity;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log(max)
// let maxVal = Math.max(...arr);
// console.log(maxVal);



// Filtering Odd Number:
// let arr = [111,20,3,14,5,6];
// let filtered = arr.filter((item) => item %2 !== 0)
// console.log(filtered);



// Merging Array :
// let arr = [1,2,3,4,5,6];
// let arr2 = [7,8,9,10,11,12,13,14,15,16];
// let arr3 = [...arr, ...arr2];
// let arr3 = arr.concat(arr2);
// console.log(arr3);




// Counting Occurences:
// let arr = [2,1,4,2,1,1,4,5,6,7];
// let occurences = {};
// for (let i = 0; i < arr.length; i++){
//     if(occurences[arr[i]]){
//         occurences[arr[i]] += 1;
//     }
//     else{
//         occurences[arr[i]] = 1;
//     }
// }
// console.log(occurences)
// function counts(arr, num){
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i]===num) count++;
//     }
//     return count;
// }
// console.log(counts(arr,1));




// Removing Duplicates :
// let arr = [2,1,4,2,1,1,4,5,6,7];
// function removeDuplicates(arr){
//     let newArr = [], isRepeat = false;
//     for(let i = 0; i < arr.length; i++){
//         isRepeat = false;
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] == arr[i]) isRepeat = true;
//         }
//         if(!isRepeat) newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(removeDuplicates(arr));
// let removedDuplicatesArray = new Set([...arr]);
// console.log(removedDuplicatesArray)




// Multiply each element of the array with modifier:
// let arr = [1,4,2,6,8];
// function multiplyByModifier(array, modifier) {
//     return array.map((item) => item*modifier);
// }
// console.log(multiplyByModifier(arr,2));



// Find Minimum and Maximum:
// let arr = [111,20,3,14,5,6,0,2000];
// function findMinMax(arr){
//     if(arr.length === 0) return;
//     if(arr.length === 1) return [arr[0], arr[0]];
//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     return [max, min];
// }
// function findMinMax(arr){
//     if(arr.length === 0) return;
//     if(arr.length === 1) return [arr[0], arr[0]];
//     let max = -Infinity, min = Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max) max = arr[i];
//         if(arr[i] < min) min = arr[i];
//     } 
//     return [max, min];
// }
// console.log(findMinMax(arr));




// Flatten the array;
// let arr = [1,[2,3],3,5,['2'],[0]];
// function flatten(arr){
//     return arr.flat();
// }
// console.log(flatten(arr))


// function removesDup(arr){
//     // return [...new Set(arr)];
//     let result = [];
//     let obj = {};
//     for(let i=0; i<arr.length; i++){
//         if(obj[arr[i]]){
//             obj[arr[i]] += 1;
//         }else{
//             obj[arr[i]] = 1;
//         }
//     }
//     for(let key in obj){
//         result.push(key); 
//     }
//     return result;
// }
// console.log(removesDup([1,2,3,4,2,1,6,8,9]))



// function minAndMax(arr){
//     let min = Infinity, max = -Infinity;
//     min = Math.min(...arr);
//     max = Math.max(...arr);
//     return [min, max];
// }
// console.log(minAndMax([1,2,3,4,2,1,6,8,9]))


function flatten(arr){
    let result = [];
    for(let i = 0; i < arr.length;i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]));
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flatten([1,[2,3],[4,[2],1,6],[8],9]))
