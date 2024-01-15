// Immediately Invoked function Expressions(IIFE)
// ()()
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// problem for globle scope for removed globle scope pollutions

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("harshit");