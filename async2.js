let num = 3;

function checkNumber(num){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            if(num > 10){
                resolve("Number is valid");
            }
            else{
                reject("Number is too small");
            }
        }, 1000);
    })
}

async function result(){
    try{
        let out = await checkNumber(num);
        console.log(out);
    }
    catch(error){
        console.log(error);
    }
}
result();
