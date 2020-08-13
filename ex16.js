
// let arr = [ 43, 28, 8, 23, 19, 46, 36, 13 ];  // should be [ 2, 5 ]
indexOfMinAndMax(arr); 

function indexOfMinAndMax(arr) {
    let max = arr[0];
    let maxIndex = 0;
    let min = arr[0];
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>max) {
            max = arr[i];
            maxIndex = i;
        }
        if(arr[i]<min) {
            min = arr[i]; 
            minIndex = i;
        }
    }
    return [minIndex, maxIndex];
}