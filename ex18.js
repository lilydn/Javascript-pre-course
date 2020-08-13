
//let arr = [ 43, 8, 23, 19, 30, 7 ];  

reverseList(arr);

function reverseList(arr) {

    let temp = arr[0]; //the first element

    for (let i = 0; i < arr.length/2; i++) {
        arr[i] = arr[arr.length-1-i]; 
        arr[arr.length-1-i] = temp; 
        temp = arr[i+1];
    }
    
    
}