capitalizeVowels();

function capitalizeVowels() {
    const readlineSync = require('readline-sync');
    let str = readlineSync.question("please enter a string: ");
    str = str.replace(/a/g,'A');
    str = str.replace(/e/g,'E');
    str = str.replace(/i/g,'I');
    str = str.replace(/o/g,'O');
    str = str.replace(/u/g,'U');
    str = str.replace(/y/g,'Y');
    console.log(str);
}

