printPrimes();

function printPrimes() {
    const readlineSync = require('readline-sync');
    let num = readlineSync.questionInt("please enter a positive number\n");
    if(num<1) {
        throw new Error('Incorrect value'); 
    }
    let array = new Array(num);
    if(num===1) console.log('1');
    else if(num===2) console.log('1,2');
    else {
        for (let i = 2; i < array.length; i++) {
            if (array[i] != 0){
                console.log(i +', ');
                for (let j = i*2; j < array.length; j=j+i){
                    array[j] = 0;  //erase all the number that are divided by the prime number we just found
                }
            }
        }  

    }
    
    
}

