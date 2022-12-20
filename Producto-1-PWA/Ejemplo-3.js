const promise = new Promise((resolve, reject)=>{
    console.log("Executor");
    resolve(42);
});
promise.then(result => {
    console.log(result);
});
console.log("Hi!");

