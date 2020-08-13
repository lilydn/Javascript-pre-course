

recommedRestaurant();


function recommedRestaurant() {
    
    const readlineSync = require('readline-sync');
    console.log('Hello');


    //ask how many people
    let people = readlineSync.questionInt('How many people are you going with? ');
    try {
        if(people<0) throw 'Input valid number, please.';
    } catch (error) {
        console.log(error);
        throw new Error('Stop execution'); 
    }


    //ask if kosher
    let kosher = readlineSync.keyInYN('Should it be Kosher? ');
    try {
        if(kosher !== true && kosher !== false) throw 'This is not a Y/N answer';
    } catch (error) {
        console.log(error);
        throw new Error('Stop execution');
    }


    //ask if kosher Lemehadrin (relevant if kosher is true)
    let kosherLe = false;
    if (kosher === true) { 
        kosherLe = readlineSync.keyInYN('Should it be Kashrut Lemehadrin? ');
        
        try {
            if(kosherLe !== true && kosherLe !== false) throw 'This is not a Y/N answer';
        } catch (error) {
            console.log(error);
            throw new Error('Stop execution');
        }

    }


    //ask about kind of food
    let foods = ['Israeli', 'Italian', 'Asian', 'Meat', 'Vegeterian'];
    let index = readlineSync.keyInSelect(foods, 'What kind of food do you want?');
    console.log(index);



    //recommendations based on choises:
    switch (index) {

        case -1:
            console.log('Canceled');
            break;

        
        case 0:
            if(kosher && kosherLe) {
                console.log('I recommend "Falafel Bnei Brak"');
            }
            else {
                console.log('I recommend "Falafel Tel Aviv"');
            }
            break;

        
        case 1:
            if(kosher && kosherLe) {
                console.log('I recommend "Pasta Bar"');
            }
            else {
                console.log('I recommend "La Lasagna"');
            }
            break;


        case 2:
            if(kosher && !kosherLe) {
                console.log('I recommend "Sushi Bar"');
            }
            else if(kosherLe) {
                console.log('I recommend "Oshi Bar"');
            }
            else {
                console.log('I recommend "Japan Japan"');
            }
            break;


        case 3:
            if(kosher && kosherLe) {
                console.log('I recommend "Armando"');
            }
            else if(people<10 && !kosher) {
                console.log('I recommend "La butchery"');
            }
            else {
                console.log('I recommend "Avazi"');
            }
            break;


        case 4:
            if(people>8) {
                console.log('I recommend "Good Veggies"');
            }
            else if(!kosherLe) {
                console.log('I recommend "La Veggie"');
            }
            else {
                console.log('I recommend "Yossi-Sandwitch"');
            }
            break;

    }

}



