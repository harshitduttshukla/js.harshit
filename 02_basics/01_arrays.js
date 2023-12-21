//array is an object
//js arrays are resizable 
const myArr = [1,1,2,3,4,5]

const myHeors = ["hatshit","harsh"]

const myArr2 = new Array(1,2,3,4,55,6,6)
//console.log(myArr[5]);


//Array methods
myArr.push(5)
myArr.pop()

myArr.unshift(8)
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(0));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



//slice ,splice
//splice is melaplate original array

console.log("A",myArr);
const myn1 = myArr.slice(1,3)


console.log(myn1);
console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);


