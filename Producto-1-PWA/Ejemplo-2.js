function requestURL(xhr){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        //asignando evento handlers(controlador)
        xhr.addEventListener("load",()=>{
            resolve({
                status: xhr.status,
                text: xhr.responseText
            });
        });

        xhr.addEventListener("error",error =>{
            reject(error);
        });
        //Enviar el request
        xhr.open("get","https://run.mocky.io/v3/21ec4572-727c-4a48-8907-cbbffc4a724e");
        xhr.send();
    });
}

const promise = requestURL("https://run.mocky.io/v3/21ec4572-727c-4a48-8907-cbbffc4a724e");
// Escucha tanto el cumpimiento como el rechazo
promise.then(response =>{
    //cumplimiento
    console.log(response.status);
    console.log(response.text);
},reason =>{
    //Rechazo
    console.error(reason.message);
});