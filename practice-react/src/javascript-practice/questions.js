// COUNT VOWELS IN A STRING :
const args = "Aeiou";
function filterVowels(name){
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    const answer =  name.toLowerCase().split('').filter((item)=>{
        for(let i=0;i<vowels.length;i++){
            if(item === vowels[i]){
                count++;
            }
        }
    });
    return count;
}
// console.log(filterVowels(args));




// REVERSE A STRING :
const str = "hospital";
function reverse(str){
    return str.split('').reverse().join('');
}
// console.log(reverse(str));





// IS PALINDROME OR NOT :
const pal = "daddad";
function isPalindrome(str){
    const val = str.split('');
    for(let i = 0; i < val.length/2; i++){
        if(val[i] !== val[val.length - 1 -i]){
            return false;
        }
    }
    return true;
}
// console.log(isPalindrome(pal))






// REMOVE DUPLICATE:
const dup = "amam";
function removeDuplicates(val){
    let result = "";
    for(let i=0; i<val.length; i++){
        if(!result.includes(val[i])){
            result += val[i];
        }
    }
    return result;
}
// console.log(removeDuplicates(dup));







// FIND MIN AND MAX VALUES:
const number = [20,4,12,76,221,1111];
function findMinAndMax(arr){
    const max = Math.max(...number);
    const min = Math.min(...number);
    return [max, min];
}
// console.log(findMinAndMax(number));








// IS ANAGRAM :
const str1 = "prathvi";
const str2 = "rpatvih";
function isAnagram(str1, str2){
    const ans1 = str1.toLowerCase().split('').sort().join('');
    console.log(ans1);
    const ans2 = str2.toLowerCase().split('').sort().join('');
    console.log(ans2);
    return ans1 === ans2;
}
// console.log(isAnagram(str1, str2));







// FIZZ BUZZ CHALLENGE :
function fizzBuzz(){
    for(let i=1; i<= 100; i++){
        if(i%3 === 0 && i%5 == 0){
            console.log('fizzBuzz');
        }
        else if(i%5 == 0){
            console.log('buzz')
        }
        else if(i%3 === 0){
            console.log('fizz')
        }
        else{
            console.log(i);
        }
    }
}
// fizzBuzz();








// CAPITALIZE FIRST WORD IN ALL SENTENCES:
const sentences = "This is a special";
function allCap(str){
    return str.split(' ')
        .map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
}
// console.log(allCap(sentences));









// RETURN MOST OCCURENECE OF A CHARACTER:
const characters = "prathvi singh tomar";
function mostOccureneOfCharacter(str){
    let ans = str.toLowerCase().split("")
    console.log(ans)
    let mostOccurene = '';
    let count = 0;
    let mostCount = 1;
    for(let i = 0; i < ans.length; i++){
        for(let j = 1; j < ans.length; j++){
            if(ans[i] === ans[j]){
                count++;
                if(count > mostCount){
                    mostOccurene = ans[i];
                    mostCount = count;
                }
            }
        }
        count = 0;
    }
    return mostOccurene;
}
// console.log(mostOccureneOfCharacter(characters));







// BALANCED PARANTHESIS:
const string = "((string(str)))"
function balancedParenthesis(string){
    let arr = [];
    let str = string.split("");
    for(let i = 0; i < str.length; i++){
        if(str[i] === "("){
            arr.push("(");
        }
        if(str[i] === ")"){
            if(arr.length>0){
                arr.pop();
            }
            else{
                return false;
            }
        }
    }
    console.log(arr);
    if(arr.length>0){
        return false;
    }
    return true;
}
// console.log(balancedParenthesis(string));












// TWO OBJECTS ARE EQUALS :
const obj1 = {
    arr : [23,13,4,21],
    obj : 23,
    l1 : [2,1],
    str : "string"
};
const obj2 = {
    str : "string",
    l1 : [2,1],
    obj : 23,
    arr : [23,13,4,21]
};

function isObjectEquals(obj1, obj2){
    let obj1Equals = JSON.stringify(obj1).split("").sort().join("");
    let obj2Equals = JSON.stringify(obj2).split("").sort().join("");
    if(obj1Equals === obj2Equals) return true
    return false;
}
console.log(isObjectEquals(obj1, obj2))










// 