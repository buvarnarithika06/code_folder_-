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

async function result(){
    try{
        let out = await waitInQueue();
        console.log(out);
    }
    catch (error){
        console.log("Unsucessful");
    }
}

result();
