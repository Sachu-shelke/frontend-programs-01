// // console.log("Starting");
/*
// //Arrays
// // - array of arrays with the same length as the array passed to constructor arguments will be returned instead.
// // - array can be converted to an array with the same length as the array passed to constructor arguments
// // - array can be use to convert to an array with the same length as the array passed to constructor arguments

// let friends=["jay","vijay","chaitnya","karan"];

// console.log(friends);

// friends[1]="ayan";
// //  input : [ 'jay', 'vijay', 'chaitnya', 'karan' ]
// // output : [ [ 'jay', 'ayan', 'chaitnya', 'karan' ] ]

// let newFriends=new Array(friends);
// console.log(newFriends);

// //----------------------------------------------------------------//

// let number =[22,33,55,99,66];
// console.log(number);

// number.push(24);
// console.log(number);

// //  input : [ 22, 33, 55, 99, 66 ]
// // output : [ 22, 33, 55, 99, 66, 24 ]

// number.pop();
// number.pop();
// console.log(number);

// //  input : [ 22, 33, 55, 99, 66, 24 ]
// // output : [ 22, 33, 55, 99 ]

// number.unshift(77);
// console.log(number);
// // output : [ 77, 22, 33, 55, 99 ]

// number.shift();
// console.log(number);
// //  output : [ 22, 33, 55, 99 ]

 //----------------------------------------------------------------//

//  exp 3

// let arr = [23, 34, 55, 99,78,90]
// let brr = [ 77, 22, 33, 55, 99]

// console.log(arr);
// console.log(brr);
// console.log(arr.concat(brr));

//  input : [ 23, 34, 55, 99, 78, 90 ], [ 77, 22, 33, 55, 99 ]
// output : [ 23, 34, 55, 99, 78, 90, 77, 22, 33, 55, 99 ]

//---------------------------------------------------------------- //

//  exp 4

// let arr =[ 0, 1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11 , 12, 13, 14, 15, 16]
// console.log(arr);

// arr.splice(5, 7);
// console.log(arr);
// // output : [ 0,  1,  2,  3,  4, 12, 13, 14, 15, 16]

// console.log(arr.indexOf(3));

//---------------------------------------------------------------- //

//  exp 5
console.log("by using standard for loops");
let num =[0,1,2,3,4];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
// output : [ 0, 1, 2, 3, 4,]
//------------------------------------------------------------------------------//
console.log("by using for of loops");

for (let value of num) {
    console.log(value);
}
//------------------------------------------------------------------------------//
console.log(" by using for each loop");

num.forEach(function(value) {
    console.log(value);
});
//------------------------------------------------------------------------------//
num.forEach( value => console.log(value) ); 

// */
// let book =new Array ("A Game of Thrones","George R.R. Martin",734);
// console.log(book);

// multi-daimentinal array
let book = [
    ["eng",300],
    ["math",250],
    ["science",350],
    ["social studies",280]
];

console.log(book[1][1]);
book[2][1]=700

console.log(book);