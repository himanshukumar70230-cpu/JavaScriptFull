const marvel_heros = ["thor","ironman","spidrman"];

const dc_heros = ["superman","flash","batman"];

const newList = marvel_heros.join(dc_heros);

console.log(newList);
console.log(typeof newList);

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const newArr = marvel_heros.concat(dc_heros);
console.log(newArr);


//Better Approch from concate
console.log("sprade Operator");
const all_new_heros = [...marvel_heros,...dc_heros];

console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("Himanshu"));

console.log(Array.from("Himanshu"));

console.log(Array.from({name:"himanshu"}));// use for interview

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

