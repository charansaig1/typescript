"use strict";
//convert to more or less specific
let a = "hello";
let b = a; //less
let c = a; //more
//angle brackets useed insted of as
let d = "world";
let e = "world";
let f = "hello";
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 4, 'concat');
let nextVal = addOrConcat(2, 4, 'concat');
//10 as string
10;
// dom
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("img");
img.src;
myImg.src;
