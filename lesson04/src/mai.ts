// type alliases
type stringOrNumber = string | number
type stringOrNumberArray = (string | number) []

type Guitaist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

type userId= stringOrNumber

//literal types 
let myName: "charansai"

let userName: "charan"| "sai" | "gorre"
userName = "charan"

//functions
const add = (a: number, b: number): number=>{
    return a+b
}
// function with no returan value
const logMsg = (message: any): void=>{
    console.log(message);
}

logMsg("hello!")
logMsg(add(2,3))


//function key word
let subtract = function(c: number,d: number): number{
    return c - d
}

//function Type Alliases
type mathFunction = (a: number, b:number) => number

let multiply: mathFunction = function (c,d){
    return c * d
}
logMsg(multiply(2,3))

//optional parameers 
const addAll = (a: number, b:number, c?: number): 
number =>{
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

//default param value
const sumAll = (a: number, b:number, c: number = 2): 
number =>{
    return a + b + c
}
logMsg(addAll(2,3,4))
logMsg(sumAll(2,3))
logMsg(addAll(2,3))

//rest parameters ...
const total = (...nums: number[]):number =>{
    return nums.reduce((prev, curr)=> prev + curr)
}

logMsg(total(10,20,30,40,50))
 
