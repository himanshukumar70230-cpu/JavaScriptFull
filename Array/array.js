let arr = [1,2,3,4,5,6];

console.log(arr);

console.log(arr.length);

console.log(arr[0]);


arr.push(8);

console.log(arr);

arr.pop();

console.log(arr);

arr.unshift(9);

console.log(arr);

arr.shift();
console.log(arr);

let myArr = [2,3,4,5,6,6];
console.log(myArr.includes(8));

console.log(myArr.indexOf(2));

const newArr = myArr.join();

console.log(newArr);

console.log(typeof newArr);


/**  ++++++++++++++++++++++++++++++++++SLICEING OF ARRAY+++++++++++++++++++++++++++++++++++++++ */


const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);
console.log("c",myArr);
console.log(myn2);
