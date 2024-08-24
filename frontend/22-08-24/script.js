// recursion :
// definations:
   // a function that call itself in its body , until it reach to the its base condition

//    function sayhello(){
//     console.log("hello, world!");
//     console.log("Bye bye!");
//     // sayhello();

//    }
//    sayhello();

//----------------------------------------------------------------//

// function sun(n){
//     // let sum = 0;
//     if (n ==0){
//         return 0;
//     }
//     if (n ===1){
//         return 1;
//     }
//   return sun(n-1) + n;

// }
// let res = sun(5);
// console.log("sum=",res);


//-------------------------------------------//

// function factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const num = parseInt(prompt("Enter a number: "));
const result = factorial(num);
console.log(`The factorial = ${result}`);
