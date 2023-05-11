// creation of empty obj
// var obj = {};

// creation
var obj = {
    name: "John",
    age: 21,
    skill: "Developer",
};

for (var key in obj) {
    console.log(key + " -> " + obj[key]);
}

// update
// obj.age = 45;
// obj.address = "bhopal";

// delete
// delete obj.name;
// delete obj.age;
// delete obj.address;
// delete obj.skill;

// read
// console.log(obj);
// console.log(obj.name);

// Array
// var arr = [];
var arr = ["John", 23, "Developer"];

arr[1] = 45;
// arr[3] = "coder";
arr[arr.length] = "hello";
arr[arr.length] = "sfsdfsdfc";

console.log(arr);
// console.log(arr[1]);

// https://www.stellardevelopment.eu/
