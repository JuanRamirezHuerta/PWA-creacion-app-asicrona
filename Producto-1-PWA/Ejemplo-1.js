setTimeout(()=>{
    console.log("timer");
    queueMicrotask(()=>{
        console.log("microtask in timer");
    });
},0);
queueMicrotask(()=>{
    console.log("microtask");
});