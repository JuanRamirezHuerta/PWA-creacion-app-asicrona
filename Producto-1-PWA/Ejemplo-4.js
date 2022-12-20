//Ejecutar errores

const promise = new Promise((resolve,reject)=>{
    throw new Error("Uh oh!");
});
promise.catch(reason => {
    console.log(reason.message);// "Uh oh!"
});