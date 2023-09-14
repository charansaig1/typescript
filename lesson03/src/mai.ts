//arrays
let stringArr = ['one', 'hey', 'charan']

let guitars = ['gift', 'give it', 1995]

let mixData = ['TCS', 1788, true]

//Accessing Elements in string array
stringArr[0] = 'ravi'
stringArr.push('hay')

//array assignment
guitars[0]= 1984
//unshift is used for adding of element in array
guitars.unshift('raju')


guitars = stringArr
mixData = guitars
mixData = stringArr

//array any type & explicit types
let test = []
let bands: string[]=[]
bands.push('van Halen')

//tuples it is most strict then array
let myTuple: [string, number, boolean] = ['dave', 42, true]

let mixed = ['john', 1, false]
// mixed = myTuple
//it is not possible myTuple = mixed
myTuple[1]

//objects
// from javascript array is also a type of a object
let myObj: object
myObj=[]
console.log(typeof myObj);
myObj= bands
myObj={}

//object type inference
const exampleObj = {
    prop1: 'Charansai',
    prop2: true,
}

//object type annotation


exampleObj.prop1 = "gorre"
type Guitarist ={
    name: string,
    active?: boolean,
    albums: (string| number )[]

    //optional object properties is hear 
    //we have to add  ?  where deffineing the object 
    //Ex :  active?: boolean
}

let evh: Guitarist ={
    name: "raju",
    active: true,
    albums: [1900, 2525, "10ddt125v"]
}

let jp: Guitarist ={
    name: "jimmy",
    albums: ["I", "II", "V"]
}
const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}`
  }

console.log(greetGuitarist(jp));
