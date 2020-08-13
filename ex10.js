replaceSpacewithStar();

function replaceSpacewithStar() {
    const readlineSync = require('readline-sync');
    let str = readlineSync.question("please enter a string: ");
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) === ' ') {
            str = str.substring(0,i) + '*' + str.substring(i+1);
        }        
    }
    console.log(str);
    
    
}

