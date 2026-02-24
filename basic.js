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