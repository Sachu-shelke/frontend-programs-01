// console.log("hi");
/*
function fibo(n){
    if(n == 0)
    {
        return;
    }
    else if (n == 1){
        return 0;
    }
    else if (n == 2){
        return 1;
    }
    return fibo(n -1)+ fibo(n -2);
}
for (let i = 0; i <=10; i++){
    console.log(fibo(i));

}
*/

// anonymous function
// anonymous function are functions that are defined in without a name. 
// they are 

    // function expression
const sum = function (a,b) {
    return a + b;
}
console.log(sum(20,32));


// (IIFE):

let msg = "sachin";

function sayHello(){
    console.log(msg);
    
}

sayHello(); // "sachin"

(function giveMsg(){
    let msg = " Have a nice day";
    console.log(msg);
    
})();