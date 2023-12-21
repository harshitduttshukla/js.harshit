/// Primitive 

// All primitive are call by value


/// 7 type : string, Number, Boolearn , null , undefined , symbol, BigInt



const id = Symbol("123")
const anotherId = Symbol('123')

//kconsole.log(id === anotherId);

const bigNumber  =5333333335n

//reference( Non primitive)

// Array, object , functions

const heros = ["shaktiman" , "naagraj" , "doga" ];

let myObj = {
    name: "harshit",
    age : 22,
}

const myFunction  = function(){
    console.log("Hello world");

}





/* 

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */

       /*
* Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)

This is my research and output if anythig is wrong please feel proud to reply me 
                                                                         
Thank you sir */


/* JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.*/



//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive ) : copy Milta Hai

// Heap (Non - primitive) : /* reference original value ka jo bhi change Karenge vah original value Mein hoga */


let myname = "harshit"
let mename = myname
mename = "shukla"
//console.log(myname);
//console.log(mename);

let userone = {
    email: "user@google.com",
    upi: "user@ybl"

}

let usertwo = userone

usertwo.email = "harshit@google.com"

console.log(userone.email)
console.log(usertwo.email)