//Singleton Object
//Object.create
//object literals
const mySym = Symbol("key1");

const jsUser = {
    name: "Himanshu",
    "full name" : "Himanshu kumar",
    [mySym]: "mykey1", //ye important hai interview
    age: 22,
    location: "Lakhisarai",
    email: "himanshu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);

//console.log(jsUser.full name) isliya squre notaiton use karte hai

console.log(jsUser["full name"]);

console.log(jsUser[mySym]);

jsUser.email= "himanshu@gmail.com";
//Object.freeze(jsUser)
jsUser.email = "himanshu@amazon.com";
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello Js user");

}

jsUser.greetingto = function(){
    console.log(`Hello JS user,${this.name}`) // using this pointer
     console.log(`Hello JS user,${jsUser.name}`)
}
console.log(jsUser.greeting);

console.log(jsUser.greeting());
console.log(jsUser.greetingto());
