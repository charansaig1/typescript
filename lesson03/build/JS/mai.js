"use strict";
//arrays
let stringArr = ['one', 'hey', 'charan'];
let guitars = ['gift', 'give it', 1995];
let mixData = ['TCS', 1788, true];
//Accessing Elements in string array
stringArr[0] = 'ravi';
stringArr.push('hay');
//array assignment
guitars[0] = 1984;
//unshift is used for adding of element in array
guitars.unshift('raju');
guitars = stringArr;
mixData = guitars;
mixData = stringArr;
//array any type & explicit types
let test = [];
let bands = [];
bands.push('van Halen');
//tuples it is most strict then array
let myTuple = ['dave', 42, true];
let mixed = ['john', 1, false];
// mixed = myTuple
//it is not possible myTuple = mixed
myTuple[1];
//objects
// from javascript array is also a type of a object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
//object type inference
const exampleObj = {
    prop1: 'Charansai',
    prop2: true,
};
//object type annotation
exampleObj.prop1 = "gorre";
let evh = {
    name: "raju",
    active: true,
    albums: [1900, 2525, "10ddt125v"]
};
let jp = {
    name: "jimmy",
    albums: ["I", "II", "V"]
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(jp));
