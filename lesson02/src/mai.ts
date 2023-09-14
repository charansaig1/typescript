import { AmdDependency } from "typescript"

let myName: string = "charansai"
let life: number
let isLoading: boolean
let album: any 
//any key which allow all datatype in ts but it is dainger use some tymes onlt



myName = "gorre"
life= 45
isLoading = true
album = 12

//functions which recives parameter

const sum = (a: number,b: number)=>{
    return a+b
}

//union types

let postId: string | number
let isActive: number | boolean

//when in doubt, cheek inference
// regExp: Ex; email data init

let re: RegExp = /\w+/g