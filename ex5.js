printOddfromOneToNum(100);

function printOddfromOneToNum(num) {
    if(num<1) {
        return;
    }
    let i;
    for(i=1; i<=num; i++) {
        if(i%2==1) {
            console.log(i);
        }
    }
}