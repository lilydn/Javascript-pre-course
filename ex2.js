
function makesTen() {
    const input = require('readline-sync');
    let num1 = Number(input.question("Enter first number: "));
    let num2 = Number(input.question("Enter second number: "));
    if(num1+num2==10) {
        console.log('makes 10');
    }
    else {
        console.log('nope');
    }    
}

makesTen();

