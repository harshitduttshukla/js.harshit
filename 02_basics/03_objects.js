//singleton
// Object.create
// for constror then always singleton
//if you are declar literals then nat a singleton


//object Literals

const mySym = Symbol("key1")
const JsUser = {
    name: "harshit",
    "full name": "Harshit Shukla",
    [mySym]: "mykey1",
    age: 18,
    location: "Basti",
    email: "harshit@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"],
// }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "harshit@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "harshit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");

}
JsUser.greetingTwo = function(){
    console.log(`Hello JsS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
