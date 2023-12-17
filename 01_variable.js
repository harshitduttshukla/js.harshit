const accountId = 1234567
let accountEmail = "hitesh@google.com"
var accountPassword = "Jaipur"
accountCity = "Jaipur"
//accountId = 2 not allowed
let accountstate

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.log(accountId);


/* prefer not use var
beacuse of issue in block scope and functional scope */
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])