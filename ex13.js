longestWord();

function longestWord() {
    const readlineSync = require('readline-sync');
    let str = readlineSync.question("please enter a string: "); 

    //insert every word to an array cell
    let wordsArr = str.split(' ');



    //check which is the longest word 
    //ignore every charecter which is not a letter

    let maxlength = 0;
    let maxlenIndex = 0;

    for(let i=0; i<wordsArr.length; i++) {
        let currlength = 0;
        
        for(let j=0; j<wordsArr[i].length; j++) {
            if ((wordsArr[i].charAt(j)>'a' && wordsArr[i].charAt(j)<'z') || (wordsArr[i].charAt(j)>'A' && wordsArr[i].charAt(j)<'Z')) {
                //if this is a letter (uppercase or lowercase)
                currlength++;
            }
        }

        if (currlength > maxlength) {
            maxlength = currlength;
            maxlenIndex = i;
        }
    }

    console.log(wordsArr[maxlenIndex]);

}

