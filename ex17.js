arr1 = ["Hello"];
arr2 = ["AppleSeeds", "Bootcamp"]


joinTwoArrays(arr1,arr2); 

// the function adds arr2 to the end of arr1 (expanding arr1)
// return arr1 after the change
function joinTwoArrays(arr1,arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1[arr1.length] = arr2[i];  
    }
    return arr1;
}


/*
// easier way would be 
arr1.concat(arr2); 
*/