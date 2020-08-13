factorial();

function factorial() {
    const readlineSync = require('readline-sync');
    let num = readlineSync.questionInt("please enter a positive number\n");
    if(num<1) {
        throw new Error('Incorrect value'); 
    }
    let factorial=num;
    num--;
    while(num>1) {
        factorial = num * factorial;
        num--;
    }
    
    console.log(factorial);
}

