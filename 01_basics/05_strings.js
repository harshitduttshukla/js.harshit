const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value");

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shukla')

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));


// string mether are important fot placement
//important
const newString = gameName.substring(0,4)
//console.log(newString);
//imp
//-ve value is onlu for slice
const anotherString = gameName.slice(-3, 4)
console.log(anotherString);

const newstringOne = "      hitesh      "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://harshit.com/harshit%20shukla"

console.log(url.replace('%20','-'))
console.log(url.includes('harshit'))

console.log(gameName.split('-'));




 