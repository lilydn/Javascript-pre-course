const readlineSync = require('readline-sync');
const chalk = require('chalk');

startGame();


function startGame() {
    console.log(chalk.redBright('- - - - - - - - - - - - - - - - - - - - - - - -'));
    console.log(chalk.redBright('////////--------Welcome To WAR--------\\\\\\\\\\\\\\\\'));
    console.log(chalk.redBright('- - - - - - - - - - - - - - - - - - - - - - - -'));
    let options = ['Play against the computer', 'Play against another player'];
    let typeOfGame = readlineSync.keyInSelect(options, 'What do you want to do?');

    switch (typeOfGame) {
        case 0:
            againstComputer();
            break;
        case 1:
            againstAnotherPlayer();
            break;
        default:
            break;
    }
}




// ------------------------------------------------------------------------ //



function againstComputer() {

    let name = readlineSync.question('Please enter your name: ');
    let playersAmount = 50;
    console.log(chalk.blueBright('Hello ' + name + ' You currently have ' + playersAmount + ' ILS'));

    while(playersAmount>0) {
        //ask the player to bet for this round
        console.log('Place your bet for the next round: 1 to ' + playersAmount);
        let playersBet = readlineSync.questionInt('I bet on: ');

        if (!betValid(playersBet, playersAmount)) return;  //if bet is not valid, exits the game

        //generate a random card for each player
        let computerCard = Math.floor(Math.random() * 12) + 1;  
        let playerCard = Math.floor(Math.random() * 12) + 1;
        
        //calculate who won:
        console.log(chalk.yellow('Your card is ' + playerCard + ' ' + (suit()) + ' and my card is ' + computerCard + ' ' + (suit())));

        //the computer won
        if(computerCard > playerCard) {
            playersAmount = playersAmount - playersBet;
            console.log(chalk.redBright('You lost ' + playersBet + ' and now you have ' + playersAmount));
            if(playersAmount===0) {
                console.log(chalk.redBright('You are broke... Bye Bye'));
                return;
            }
        }

        //the player won
        else if(playerCard > computerCard) {
            playersAmount = playersAmount + playersBet;
            console.log(chalk.greenBright('You Won ' +  playersBet + '!! You now you have ' + playersAmount));
        }

        //the player still has money - ask him what to do
        //if he did not decide to continue (option 0), we exit the game.
        if (whatToDo(name, playersAmount) !== 0) return; 

        // in case of a draw, plays another round automatically.  
    }
        
}






// ------------------------------------------------------------------------ //





function againstAnotherPlayer() {
    let name1 = readlineSync.question('Player1: Please enter your name: ');
    let name2 = readlineSync.question('Player2: Please enter your name: ');

    let player1Amount = 50;
    let player2Amount = 50;

    console.log(chalk.blueBright('Hello ' + name1 + ' You currently have ' + player1Amount + ' ILS'));
    console.log(chalk.blueBright('Hello ' + name2 + ' You currently have ' + player2Amount + ' ILS'));


    while(player1Amount>0 && player2Amount>0) {
        
        //ask the players to bet for this round
        console.log(name1 + ' place your bet for the next round: 1 to ' + player1Amount);
        let player1Bet = readlineSync.questionInt('I bet on: ');
        if(!betValid(player1Bet, player1Amount)) return;  //if bet is not valid, exits the game

        console.log(name2 + ' place your bet for the next round: 1 to ' + player2Amount);
        let player2Bet = readlineSync.questionInt('I bet on: ');
        if(!betValid(player2Bet, player2Amount)) return;  //if bet is not valid, exits the game
        
        //generate a random card for each player
        let player1Card = Math.floor(Math.random() * 12) + 1;  
        let player2Card = Math.floor(Math.random() * 12) + 1;
        
        //calculate who won:
        console.log(chalk.yellow(name1 + '\'s card is: ' + player1Card + ' ' + (suit()) + '\n' + name2 + '\'s card is: ' + player2Card + ' ' + (suit())));


        //player1 won
        if(player1Card > player2Card) {
            player1Amount = player1Amount + player1Bet;
            player2Amount = player2Amount - player2Bet;
            console.log(chalk.greenBright(name1 + ': You Won ' +  player1Bet + '!! and now you have ' + player1Amount));
            console.log(chalk.redBright(name2 + ': You Lost ' + player2Bet + ' and now you have ' + player2Amount));
        }

        //player2 won
        else if(player2Card > player1Card) {
            player1Amount = player1Amount - player1Bet;
            player2Amount = player2Amount + player2Bet;
            console.log(chalk.redBright(name1 + ': You Lost ' + player1Bet + ' and now you have ' + player1Amount));
            console.log(chalk.greenBright(name2 + ': You Won ' +  player2Bet + '!! and now you have ' + player2Amount));
        }

        //a draw
        else if(player2Card === player1Card) {
            console.log(name1 + ' you have ' + player1Amount);
            console.log(name2 + ' you have ' + player2Amount);
        }

        //if one of the players is broke, print a message and exit the game
        //it is not possible for both players to be broke 
        if(player1Amount===0 && player2Amount!==0) {
            console.log(name1 + ': You are broke... The game is finished and ' + name2 + ' won! Bye Bye');
            return;
        }
        else if(player2Amount===0 && player1Amount!==0) {
            console.log(name2 + ': You are broke... The game is finished and ' + name1 + ' won! Bye Bye');
            return;
        }
        


        //both players still have money, both have to decide what to do
        //if he did not decide to continue (option 0), we exit the game.
        if (whatToDo(name1, player1Amount) !== 0) {
            console.log(chalk.blueBright(name2 + ', You got ' + player2Amount + ' ILS. Thank you, bye!'));
            return; 
        }
        if (whatToDo(name2, player2Amount) !== 0) {
            console.log(chalk.blueBright(name1+ ', You got ' + player1Amount + ' ILS. Thank you, bye!'));
            return; 
        }

    }
}





// ------------------------------------------------------------------------ //



//a function that checks if the bet is valid
function betValid(playersBet, playersAmount) {
    if(playersBet<0 || playersBet>playersAmount) {
        console.log(chalk.redBright('I said between 1 to '+ playersAmount + ' and you typed ' + playersBet + '\nThis is not acceptable. Bye.'));
        return false;
    }
    return true;
}


//a function that asks the player what to do
function whatToDo(name, playersAmount) {
    console.log(name + ', what would you like to do?');
    let answers = ['Play another round', 'Leave with my money :-)'];
    let choice = readlineSync.keyInSelect(answers,);
    if(choice!=0) {
        console.log(chalk.blueBright(name + ', You got ' + playersAmount + ' ILS. Thank you, bye!'));
    }
    return choice;
}


//a function to randomely generate a card suit
function suit() {
    let s = Math.floor(Math.random() * 4) + 1;
    let suit = '';
    switch (s) {
        case 1: suit = '\u2665'; break; // HEART
        case 2: suit = '\u2666'; break; // DIAMOND
        case 3: suit = '\u2663'; break; //CLUB
        case 4: suit = '\u2660'; break; //SPADE
        default:
            break;
    }
    return suit;
}
