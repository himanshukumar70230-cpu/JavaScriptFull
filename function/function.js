function nice(name){
    console.log("Hey" + name + "is a Good boy");
    console.log("Hey" + name + "this is Good course");
    console.log("Hey" + name + "is a Good boy");
    console.log("Hey" + name + "is a Good boy");
}
nice("rohit")

function add(a,b){
  console.log("Add" ,a+b);
  console.log("Sub" ,a-b);
  console.log("mul" ,a*b);
  console.log("power" ,a**b);
  return a%b;
  
}
add(2,3);
let result = add(10,2);
console.log(`The remainder is ${result}`)

//arrow function