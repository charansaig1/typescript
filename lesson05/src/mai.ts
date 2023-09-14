type one = string
type two = string | number
type three = "Hello"

//convert to more or less specific
let a :one = "hello"
let b = a as two //less
let c = a as three //more

//angle brackets useed insted of as

let d =<one> "world"
let e = <string | number> "world"
let f = "hello"

const addOrConcat = (a: number,b: number,c: "add" | "concat"): number|
string => {
    if(c === 'add')return a+b
    return ""+ a + b
}

let myVal: string = addOrConcat(2,4,'concat') as string
let nextVal: number = addOrConcat(2,4,'concat') as number
//10 as string
(10 as unknown) as string

// dom
const img = document.querySelector("img")!
const myImg = document.getElementById("#img")as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById("img")
img.src
myImg.src