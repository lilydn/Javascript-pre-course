isPalindrome();

function isPalindrome() {
    const readlineSync = require('readline-sync');
    let str = readlineSync.question("please enter a string: ");
    let isPalindrome = true;
    for (let i=0; i < str.length/2; i++) {
        if(str.charAt(i) !== str.charAt(str.length-i-1)) {
            isPalindrome = false;
            break;
        }        
    }
    if(!isPalindrome) console.log('Not a palindrome.');
    else console.log('It is a palindrome.');    
}

