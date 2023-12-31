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

//4.
// Nth-to-Last

/* Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3),
    return 4. If the array is too short, return null. */

function nthToLast(arr, n){
    if (arr.length < n){
        return null;
    }
    else{
        return arr[arr.length - n];
    }
}

console.log(nthToLast([5,2,3,6,4,9,7],3));

//#############################################################################

//5.
// Nth-Largest

/* Liam has "N" number of Green Belt stickers for excellent Python projects.
    Given arr and N, return the Nth-largest element, where (N-1) elements are
    larger. Return null if needed. */

function nthLargest(arr, n){
    if (arr.length < n){
        return null;
    }
    else{
        for (var i = 0; i < arr.length; i++){
            var max = arr[i];
            var maxIndex = i;
            for (var j = i; j < arr.length; j++){
                if (arr[j] > max){
                    max = arr[j];
                    maxIndex = j;
                }
            }
            arr[maxIndex] = arr[i];
            arr[i] = max;
        }
        return arr[n - 1];
    }
}

console.log(nthLargest([5,2,3,6,4,9,7],3));

//#############################################################################

//6.
// Skyline Heights

/* Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say
    you are given an array with heights of consecutive buildings, starting closest
    to you and extending away. Array [-1,7,3] would represent three buildings:
    first is actually out of view below street level, behind it is second at 7
    stories high, third is 3 stories high (hidden behind the 7-story). You are
    situated at street level. Return array containing heights of buildings you
    can see, in order. Given [-1,1,1,7,3] return [1,7]. */

function skylineHeights(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(skylineHeights([-1,1,1,7,3]));

//#############################################################################