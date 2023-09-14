"use strict";
//literal types 
let myName;
let userName;
userName = "charan";
//functions
const add = (a, b) => {
    return a + b;
};
// function with no returan value
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello!");
logMsg(add(2, 3));
//function key word
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
//optional parameers 
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 4));
logMsg(sumAll(2, 3));
logMsg(addAll(2, 3));
//rest parameters ...
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 20, 30, 40, 50));
