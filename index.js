//1. 
// Remove Negatives

/* Implement removeNegatives() that accepts an array, 
removes negative values, and returns the same array (not a copy), 
preserving non-negatives’ order. As always, do not use built-in array 
functions. */

function removeNegatives(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            count++;
        }
        else{
            arr[i - count] = arr[i];
        }
    }
    while (count--){
        arr.pop();
    }
    return

}

console.log(removeNegatives([1,2,-3,4,-5,6,-7,8,-9,10]));