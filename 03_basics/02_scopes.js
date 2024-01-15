let a = 300
// const b = 20
// var c = 30
if(true){

    let a  = 10
    const b = 20
}

// console.log(a);
// console.log(b);
// console.log(c);




//node scope is diffrencek for inspect scope in  concole

// chiled function are accese the parent varable
//closer this concept

function one(){
    const username = "harshit"

    function two(){
        const website =  "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()


if(true){
    const username = "harshit"
    if(username === "harshit"){
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++++++interesting+++++++++++++++++++++++++++++++

// console.log(addOne(5))
// function addOne(num){
//     return num + 1;
// }


addTwo(5)
const addTwo = function(num){
    return num + 2
    
}