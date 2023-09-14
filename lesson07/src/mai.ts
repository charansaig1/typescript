//index signatures


interface TransactionObj {
    readonly[index: string]: number
}


// interface TransactionObj {
//     pizza: number,
//     Books: number,
//     Job: number
// }

const todaysTransactions: TransactionObj= {
    pizza: -10,
    Books: -5,
    Job: 50,
}

console.log(todaysTransactions.pizza);
console.log(todaysTransactions["pizza"]);

let prop: string = "pizza"
console.log(todaysTransactions[prop]);

const todayNet =(transactions: TransactionObj):
number =>{
    let total = 0
    for (const transaction in transactions){
        total += transactions[transaction]
    }
    return total
} 

console.log(todayNet(todaysTransactions));


console.log(todaysTransactions['charan']);

///////////////////////

interface Student   {

    [Key: string]: number|string | number[]|undefined
    name: string,
    GAP: number,
    classes?: number[]
}

const student: Student =  {
    name: "Doug",
    GAP: 3.5,
    classes: [100, 200]
};

console.log(student.test);


