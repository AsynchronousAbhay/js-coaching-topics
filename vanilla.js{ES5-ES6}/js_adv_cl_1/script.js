// let const - local scopic variables
// var - globle scopic variable

// template strings
// let name = "John Doe";
// let age = 23;
// console.log("Name is " + name + " age is " + age);
// console.log(`Name is ${name} age is ${age}`);  -----part of ES6--advanced

// rest spread arrow-function
// function sum(a, b) {
//     return a + b;
// }

// let obj = {
//     name: "John",
// };

// let obj1 = { city: "bhopal", ...obj };  ------use for making copy.......
// obj1.age = 12;

// console.log(obj);
// console.log(obj1);

// const sum = (b, ...a) => a;
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 3, 2, "john", true));

// object array
let arr = [41, 6, 90, 24, 1, 567, 47];
// let arr2 = [];
// arr.forEach((element, index) => {
//     arr2.push(element * 2);
// });

// let arr2 = arr.map((e, i) => {       //---- this is usr for trevarsing and manipulation....
//     console.log(e);    
// //     return e*2
// });

let arr2 = arr.filter((e, i) => {      //---- filter is use for elimination or deletion of elements....
    return e !== 24;
});

console.log(arr);
console.log(arr2);

// why js sync and work as async
// error handling
// async await / promises
