"use strict";
//index signatures
// interface TransactionObj {
//     pizza: number,
//     Books: number,
//     Job: number
// }
const todaysTransactions = {
    pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.pizza);
console.log(todaysTransactions["pizza"]);
let prop = "pizza";
console.log(todaysTransactions[prop]);
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todaysTransactions));
console.log(todaysTransactions['charan']);
const student = {
    name: "Doug",
    GAP: 3.5,
    classes: [100, 200]
};
console.log(student.test);
