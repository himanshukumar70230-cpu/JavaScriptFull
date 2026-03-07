console.log("I am in loop");
for(i = 0;i<4;i++){
    console.log("I love you");
}
let obj = {
    name: "Himanshu",
    age: 23,
    role: "Softer Developer"
}
//for in loop
for (const key in obj) {
     
    const element = obj[key];
    console.log(key,element);
}
//for of loop use for iteravel
const t = "himanshu"
for (const c of t) {
    console.log(c);
}