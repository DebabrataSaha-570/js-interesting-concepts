/*
falsy:
false
0
empty string
undefined
null
NaN 




-------------------------------------
Truthy: 
true
any number(positive or negative)
any string (including single white space), '0', 'false', 
[]
anything else that is not falsy will be truthy; 


*/



// const x = true;
// const x = false;
// const x = 4;
// const x = -25;
// const x = 0;
// const x = 'Solaiman khan';
// const x = '';
// const x = ' ';
// const x = '0';
// const x = 'false';
// let x;
// let x = null;
// let x = parseInt('hello')

// let x = [];
let x = {};
console.log('value of x', x)
if (x) {
    console.log('variable is truthy')
}
else {
    console.log('variable is falsy')
}