// let a=3;
// let b= Number("5a");
// let c=Number(true);

// let b= "5a";
// let a=String(3);
// let c=true;
// let c= true;
// let b=Boolean("5a");
// let a =Boolean(1);
// let a1=Boolean(8);
// let b1=Boolean(Number("0"));


// console.log("a=",a);
// console.log("b=",b);
// console.log("c=",c);

// console.log("a1=",a1);
// console.log("b1=",b1);



// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);
// console.log("a ** b = ",a**b);

// console.log(typeof NaN); // NaN = not a number 


//----------------------------------------------------------------
// Math module

// a=3.12;
// console.log("a =",a);

// console.log("Math.floor(a) =", Math.floor(a)); // floor returns the largest integer less than or equal to the number
// console.log("Math.ceil(a) =", Math.ceil(a)); // ceil returns the smallest integer greater than or equal to the number
// console.log("Math.round(a) =", Math.round(a)); // round returns the nearest integer to the number (if the fractional part is 0.5 or greater, it rounds up)
// console.log("Math.trunc(a) =", Math.trunc(a)); // trunc returns the integer part of the number by removing any fractional digits

//----------------------------------------//

// while loop
// do while loop

// let i=1;
// let j=1;
// while(i<=10){
//     j=1;
//     while(j<=10){
//     console.log("*");
//     j++;
// }
// i++;
// }

let i=2;
let j;
while (i<=10){
    j=1;
    while(j<=10){
        console.log(i,"*",j,"=",i*j);
        j++;
    }
    console.log("\n");
    i++;
}

