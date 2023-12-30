// function sayMyName(){
//     console.log("h");
//     console.log("a");
//     console.log("r");
//     console.log("s");
//     console.log("h");
//     console.log("i");
//     console.log("t");
// }

// sayMyName();



// //function num1,num2 is a paramater
function addTwoNumbers(num1,num2){
    // console.log(num1+num2);

}
//function 3,null is argument
 


// const result = addTwoNumbers(3,6);
// console.log(result);



function addTwoNumbers(num1,num2){
    let result = num1 + num2
    return result

}


const result = addTwoNumbers(3,6);
// console.log(result);


function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`

    
}
// console.log(loginUserMessage("harshit"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,500, 2000));

const user = {
    username: "harshit",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);

}

// handleObject(user);

handleObject({
    username: "sam",
    prices: 399

})

const myNewArray = [200,400,100,600]

function returnsecondValue(getArray){
    return getArray[1]
}

console.log(returnsecondValue(myNewArray));