//variable in javascript


// var a=8;
// console.log(a)
// console.log(typeof a )

// var b='hello'
// console.log(b)
// console.log(typeof b)

// a='BYE'
// console.log(a)
// console.log(typeof a)

//------------------------

// let x=55;
// console.log(x);
// console.log(typeof x);


// let x="868"
// SyntaxError: Identifier 'x' has already been
//  declared (at script.js:23:5)Understand this error

//  x= 55
//  console.log(x);
//  console.log(typeof x);


//  //------------

//  const n=2.71;  //const behaviour like global//
//  console.log(n);
//  console.log(typeof n);

//  n=83;
//  TypeError: Assignment to constant variable.
//     at script.js:38:3


//---------scope-------------

var x=34;

console.log(x);
{
    var x=10;
    console.log(x);
}

console.log(x);

//--------------------------

let y=14;
console.log(y);
{
    let y=11; //--------create new block for this using let---------
    console.log(y);

    y="yes";
    console.log(y)
}

console.log(y);


//----------------------------------