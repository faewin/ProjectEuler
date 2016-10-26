var testArray = [2,9,5,3,1,10,4];

// Intro to algorithms
// Input - Unsorted list
// Output - Sorted list
//
// Algorithm - Insertion Sort
// Great for sorting a small number of elements

function insertionSort(list) {
    var len = list.length;
    for (var i = 1; i < len; i++) {
        var temp = list[i];
        var j    = i - 1;

        for(; j >= 0 && list[j] > temp; j--) {
            list[j+1] = list[j];
        }
        list[j+1] = temp;
    }
    return list;
}

console.log(insertionSort(testArray));
