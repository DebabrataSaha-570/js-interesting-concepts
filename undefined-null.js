/*
1. variable value not assigned 
2. function but didn't write return anything. 
3. just wrote return but didn't return anything. 
4. parameter that isn't passed
5. property that doesn't exist in that object . 
6. accessing array element out of range. 
7. accessing deleted array element . 
8. explicitly set value to undefined. 
9. 

*/

//===> 1
let first;
// console.log(first)

//===> 2
function second(x, y) {
    const sum = x + y;
}

// console.log(second(3, 4))

//===> 3

function add(a, b) {
    const sum = a + b;
    return;
}
// console.log(add(3, 4))

//====> 4
function double(a, b) {
    const result = a * 2;
    // console.log(b)
    return result;
}
double(81)

//====> 5

const fifth = { name: 'shuvo', age: 100, location: 'mars' };
// console.log(fifth.phone)

//====> 6

// const sixth = [54, 12, 41, 3]
// console.log(sixth[10])

//======> 7
const sixth = [54, 12, 41, 3]
delete sixth[2];
// console.log(sixth)
// console.log(sixth[2])


//======> 8

const seventh = undefined;
// console.log(seventh)



// ---------null 
const myObj = { name: 'samad', profession: null }

