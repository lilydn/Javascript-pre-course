const figlet = require('figlet');
const readlineSync = require('readline-sync');
const chalk = require('chalk');

let wordsArr = ['television','internet','watermelon','giraffe','spider','butterfly','geography','computer','raindrop','slippers','tomato','building','biscuit','history','penguin','question','encyclopedia','hippopotamus','jellyfish','mountain','elephant','planet','asterisk','civilization'];


HangedManGame();



function HangedManGame() {
    // welcome message
    console.log(chalk.blueBright(figlet.textSync('Hang Man', {
        font: 'Poison',
        horizontalLayout: 'deafult',
        verticalLayout: 'deafult',
        width: 120,
        whitespaceBreak: false
    })));

    // randomly select a word and display an asterisk for each letter
    let wIndex = Math.floor(Math.random() * (wordsArr.length));
    let word = wordsArr[wIndex]; 
    let hidden = '';
    for (let i = 0; i < word.length; i++) {
        hidden = hidden + '*';
    }

    let numOfGuesses = 10;

    // the game loop
    while(numOfGuesses > 0) {

        console.log('----------------------------');
        console.log('----You have ' + numOfGuesses + ' guesses----');
        console.log('----------------------------');
        console.log('The word is: ' + chalk.cyanBright(hidden));  console.log(word); //to erase-----------

        //let the user guess the entire word or just a letter
        let options = ['Guess a letter', 'Guess the entire word'];
        let typeOfGuess = readlineSync.keyInSelect(options, 'What do you want to do?');
        
        if(typeOfGuess === -1) return; // the user wants to cancel
        
        let guess = readlineSync.question('What is your guess? ');
        guess = guess.toLowerCase();


        // ----------- guessing one letter ----------- //
        if(typeOfGuess === 0) {      
            // an invalid guess - the user does not lose an attempt
            while (!((guess >= 'a' && guess <= 'z') || (guess >= 'A' && guess <= 'Z')) || guess.length!=1) {
                console.log(chalk.redBright('An invalid guess. You must enter a letter!'));
                guess = readlineSync.question('What is your guess? ');
            }
            
            // in case the letter appears in the word, all of the asterisk that represents that letter should be replaced with the letter
            if(word.indexOf(guess) !== -1) {
                for (let i = 0; i < word.length; i++) {
                    if(word.charAt(i) === guess) {
                        hidden = hidden.slice(0,i) + guess + hidden.slice(i+1);
                    }
                }
                if(guessedCorrectly(hidden,word)) { // check if there are no more asterisks and the word is guessed
                    return;
                }
            } 
            
            // in case the guess was wrong, the user will lose an attempt
            else {
                numOfGuesses = numOfGuesses - 1;
            }

            
        } 

        // ----------- guessing the entire word ----------- //
        else if(typeOfGuess === 1) {  
            if(guessedCorrectly(guess, word)) {
                return; // exit game if the guess is correct
            }
            else { // if the guess is wrong - burns all the remaing attempts and exits the game
                console.log('Sorry, this is not the word :-( ')
                numOfGuesses = 0;
            }
        } 

    } // end of game loop

    if(numOfGuesses === 0) {
        console.log(chalk.redBright('- - - - - - - - - - - - - - - - - - - - -'));
        console.log(chalk.red('The man is hanged. No more attempts. Bye!'));
        console.log(chalk.redBright('- - - - - - - - - - - - - - - - - - - - -'));
        return;
    }

} // end of game function


// - - - - - - - - - - - - - - - - - - - - - - - - - - //


// a message that the word is guessed successfully 
function guessedCorrectly(guess, word) {
    if (guess === word) {  
        console.log(('The word is: ' + chalk.cyanBright(guess)))
        console.log(chalk.green('Wow You are good!!!'));
        return true;
    }
    else 
        return false;
}





