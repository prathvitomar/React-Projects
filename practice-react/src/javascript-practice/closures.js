function a(){
    let ans = 10;
    function c(){
        console.log(ans);
    }
    return c;
}

const func = a();
// console.log(func)