numberLargerThanTen();

function numberLargerThanTen() {
    const readlineSync = require('readline-sync');
    let num = readlineSync.questionInt("please choose a number larger than 10\n");
    while (num<=10) {
        num = readlineSync.questionInt("please choose a number LARGER than 10\n");
    }
    console.log('thank you');

}