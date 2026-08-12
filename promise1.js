const name = "rithika";
const age = 22;

function waitInQueue(){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            details();
            resolve("resolved successfully");
        }, 1000);
    })
}

function details(){
    console.log(`name: ${name} age: ${age}`);
}

function result(){
    waitInQueue().then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Employee Details");
    })
}

result();


