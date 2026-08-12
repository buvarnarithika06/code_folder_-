///User: Alice
///Posts: Post 1, Post 2, Post 3
///Comments: Nice!, Great!, Awesome!

const name = "alice";
const array = ["Post 1","post 2","Post 3"];
const comments = "Nice!, Great!, Awesome!";

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

function getComments(){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            resolve(comments);
        },3000);
    })
}

async function result(){
    try{
        let [out,out1,out2] = await Promise.all([
            getUser(),
            getPosts(),
            getComments(),
            ]);
    
        console.log(`User: ${out}`);
        console.log(`posts: ${out1}`);
        console.log(`comments: ${out2}`);
    }
    catch(error){
        console.log(error);
    }
}
result();
