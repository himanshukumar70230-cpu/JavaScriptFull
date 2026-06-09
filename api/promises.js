const promiseOne = new Promise(function(resolve,reject){
    //Do an asyn task
    //DB calls,cyptography,network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
   
});

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 completed');
        resolve();
    },1000)
}).then(function(){
    console.log('promise  2 is consumed');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
});


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Himanshu",password: "123"})
        }
        else{
            reject('ERROR: Something went Wrong')
        }
    },1000)
});

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected");
});

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;

        if (!error) {
            resolve({ username: "javaScript", password: "123" });
        } else {
            reject('Error: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers(){
//   try{
//     const response = await fetch('https://randomuser.me/api/');
   
//     const data = await response.json()
//     console.log(data);
//   }catch(error) {
//     console.log("E:",error);
//   }
// }

// getAllUsers();

fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error));
