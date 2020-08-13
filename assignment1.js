const readlineSync = require('readline-sync');
const chalk = require('chalk');



startQuiz();

function startQuiz() {
    
    console.log(chalk.magentaBright('#################'));
    console.log(chalk.magentaBright('Hello! Welcome to the Quiz!'));
    console.log(chalk.magentaBright('#################'));
    console.log(chalk.magentaBright('Which Big Bang Theory character are you?'));
    console.log(chalk.magentaBright('#################'));
    console.log(chalk.magentaBright('Let\'s find out!\n'));
   
    console.log(chalk.cyan('--------------\nFirst Question\n--------------\n'));
    let answers1 = ['Pancakes', 'Bran Flakes', 'Fruit and Yoghurt', 'Oatmeal'];
    let ans1 = readlineSync.keyInSelect(answers1, 'Pick a breakfest');
    

    console.log(chalk.cyan('--------------\nSecond Question\n--------------\n'));
    let answers2 = ['A biological process', 'A puzzle', 'What you make it', 'Cute cat videos on the internet'];
    let ans2 = readlineSync.keyInSelect(answers2, 'Life is...');


    console.log(chalk.cyan('--------------\nThird Question\n--------------\n'));
    let answers3 = ['Funny', 'Confident', 'Stubborn', 'I don\'t have friends'];
    let ans3 = readlineSync.keyInSelect(answers3, 'Your friends would describe you as...');


    console.log(chalk.cyan('--------------\nFourth Question\n--------------\n'));
    let answers4 = ['Don\'t really go to parties', 'Hover by the fridge', 'Show off your dance moves', 'Get all the attention'];
    let ans4 = readlineSync.keyInSelect(answers4, 'You are at a party. You...');
       
    
    console.log(chalk.cyan('--------------\nFifth Question\n--------------\n'));
    let answers5 = ['Family', 'Having fun', 'Success', 'Recognition'];
    let ans5 = readlineSync.keyInSelect(answers5, 'The most important thing in life is...');


    console.log(chalk.cyan('--------------\nSixth Question\n--------------\n'));
    let answers6 = ['Gaming', 'Sleeping', 'Doing laundry', 'Partying',];
    let ans6 = readlineSync.keyInSelect(answers6, 'Weekends are for...');


    console.log(chalk.cyan('--------------\nSeventh Question\n--------------\n'));
    let answers7 = ['Spongebob', 'Spock', 'Darth Vader', 'Gollum'];
    let ans7 = readlineSync.keyInSelect(answers7, 'Who is your favourite character?');


    console.log(chalk.cyan('--------------\nEighth Question\n--------------\n'));
    let answers8 = ['I follow the mobile industry updates and I know exactly what I want', 
                    'Get a model identical or similar as my friends', 
                    'Get whatever the salesperson says is probably good', 
                    'I will order parts and fix my old phone by myself'];
    let ans8 = readlineSync.keyInSelect(answers8, 'Your phone is not working. What would you do?');
    

    //on every odd question the answers are organized in an ascending order 
    //and on every even question the answers are organized in a descending order
    //except from question 8 which is organized differently - but we organize it in a descending order here:
    
    switch (ans8) {
        case 0:
            ans8 = 1;
        case 1:
            ans8 = 2;
        case 2:
            ans8 = 3;
        case 3:
            ans8 = 0;
        case -1:
            break;
    }

    //calculating the result
    let result = ans1 - ans2 + ans3 - ans4 + ans5 - ans6 + ans7 - ans8;

    //the highest score will be: 3 - 0 + 3 - 0 + 3 - 0 + 3 - 0 = 12
    //the lowest score will be: 0 - 3 + 0 - 3 + 0 - 3 + 0 - 3 = -12

    console.log(chalk.magentaBright('--------------\nQuiz Results\n--------------'));

    if (result>4 && result<=12) {
        console.log(chalk.magentaBright('You are Sheldon Cooper!\nYou\'re intelligent, organised and dedicated to your chosen fandoms.\nAs far as you can see, you have little to no shortcomings.'));
    }
    else if(result>=-4 && result<=4) {
        console.log(chalk.magentaBright('You are Leonard Hofstadter!\nYou are kind, funny and reliable.\nYou are ambitious and love your work, but at heart you are a true romantic.'));
    }
    else if(result>=-12 && result<-4) {
        console.log(chalk.magentaBright('You are Penny!\nYou\'re loving and cheerful person, you\'re fun to hang out with,\nbut order and logic are not your best strengths.'));
    }
    else {
        console.log(chalk.magentaBright('invalid result'));
    }
    
          
}


    

    






