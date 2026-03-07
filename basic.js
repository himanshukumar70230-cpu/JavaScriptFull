console.log("Himanshu Good Evening");
var a = 10;
var b = 20;
console.log(a+b);
var c = "Himanshu"
console.log(typeof a,typeof b,typeof c);
//let  is Blocked variable
let d = 65;
{
    let d = 35;
    console.log(d);
}
 console.log(d);

//var is Global variable
var e = 55;
{
    var e = 45;
    console.log(e);
} 
 console.log(e);

let x = 23;
let y = "Himanshu";
let k = true;
let q = undefined;
let r = null;
console.log(x,y,k,q,r);

console.log(typeof x,typeof y,typeof k,typeof q,typeof r);

let o = {
    name: "Himanshu",
    age: 24,
    "job role" : "Engineering"
}
o.salary = "100Crores";

console.log(o);
