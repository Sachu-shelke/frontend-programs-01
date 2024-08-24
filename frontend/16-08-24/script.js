//  function   //

// function display(){
//     console.log("Hello World");
// }
// display();

//------------------------------------//


// function double(a) {
//     return a * 2;
// }
// console.log(double(25));

//------------------------------------//
let a= Number(prompt("enter a number :"));
let b=Number(prompt("enter b number :"));  
function gcd(a, b) {
    for(b!= 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcd(12, 18));

//------------------------------------//

function fibonacci(n) {
    let fib = [0, 1];
    for(let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
}

console.log(fibonacci(10));

//------------------------------------//
