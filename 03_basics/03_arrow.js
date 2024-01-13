// this are refrred corent contest
// out side the contest this are refred for  {} emtye object

const user = {
    username: "harshit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }
}

// user.welcomeMessage()
// user.username = " shukla"
// user.welcomeMessage()


// console.log(this);

// this is not useed in function only used in in object
// // ex =>
// function chai(){
//     console.log(this);
// }
// chai()



// function one(){
//     let usesname = " harshit"
//     console.log(this.usesname);
// }

// one()

// const helo = function(){
//     let usesname = " harshit"
//     console.log(this.usesname);
// }



// arrow function
const helo = ()=>{
    let usesname = " harshit"
    console.log(this.usesname);
}

// helo()
// expclite return
// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// implecit return 
// if used {} curly brackets then used return but in square brackest not used return 
// const addtwo = (num1,num2) =>  num1 + num2

// const addtwo = (num1,num2) =>  (num1 + num2)

const addtwo = (num1,num2) =>  ({username : "harshit"})



console.log(addtwo(3,4));