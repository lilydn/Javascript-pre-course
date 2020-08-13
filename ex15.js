minAndMax(8);

function minAndMax(num) {
    //create an array of the length of num
    let arr = new Array(num);

    //fill it with random numbers in the range 1-50 (inclusive) 
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 50) + 1;
    }

    // find and print the maximum number and the minimum number in the array
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>max) max = arr[i];
        if(arr[i]<min) min = arr[i]; 
    }

    // console.log(arr);
    console.log('min is ' + min);
    console.log('max is ' + max);
}