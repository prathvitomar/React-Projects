function isValidate(cart){
    return true;
}
function createOrder(cart){
    const promise = new Promise((resolve, reject) =>{
        if(!isValidate(cart)){
            const err = new Error("Invalid Cart Detail");
            return reject(err);
        }
        resolve("12345");
    })
    return promise;
}

function orderSuccess(orderId){
    return new Promise((resolve, reject)=>{
        return resolve("Order Successfully Placed");
    })
}


createOrder("cart").then((orderId)=>{
    console.log(orderId);
    return orderId;
}).then((orderId)=>{
    return orderSuccess(orderId);
})
.then((successMessage)=>{
    console.log(successMessage)
})
.catch((errorMessage)=> console.log(errorMessage.message));