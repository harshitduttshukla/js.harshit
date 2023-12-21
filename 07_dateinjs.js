//importan video for project in date//

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate);
// console.log(myDate.toDateString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// data is a object
console.log(typeof myDate);

// let MycreateDate = new Date(2023, 0, 23)
// let MycreateDate = new Date(2023, 0, 23,5,3)k
// let MycreateDate = new Date("2023-01-14")
let MycreateDate = new Date("01-14-2023")
// console.log(MycreateDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(MycreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long"
})
