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


//#############################################################################

//2.
// Second-to-Last

/* Return the second-to-last element of an array. Given [42,true,4,"Liam",7],
    return "Liam". If array is too short, return null. */

function secondToLast(arr){
    if (arr.length < 2){
        return null;
    }
    else{
        return arr[arr.length - 2];
    }
}

console.log(secondToLast([42,true,4,"Liam",7]));

//#############################################################################

//3.
// Second-Largest

/* Return the second-largest element of an array. Given [42,1,4,Math.PI,7],
    return 7. If the array is too short, return null. */

function secondLargest(arr){
    if (arr.length < 2){
        return null;
    }
    else{
        var max = arr[0];
        var secondMax = arr[0];
        for (var i = 0; i < arr.length; i++){
            if (arr[i] > max){
                max = arr[i];
            }
            if (arr[i] > secondMax && arr[i] < max){
                secondMax = arr[i];
            }
        }
        return secondMax;
    }
}

console.log(secondLargest([42,1,4,Math.PI,7]));

//#############################################################################