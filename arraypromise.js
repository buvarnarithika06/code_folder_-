const name = "alice";
const array = ["Post 1","post 2","Post 3"];

function getUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            resolve(name);
        }, 1000);
    })
}

function getPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            resolve(array);
        }, 2000);
    })
}

async function result(){
    try{
        let out = await getUser();
        let out1 = await getPosts();
        console.log(out);
        
        for(const key in out1){
            console.log(out1[key]);
        }
    }
    catch(error){
        console.log(error);
    }
}
result();
