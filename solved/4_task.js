function ObjectsBinarySearch(arr, searchValue, param) {
    let first = 0;
    let last = arr.length - 1;
    let found = false;
    let middle = null;


    while(!found && first <= last) {
        middle = Math.floor((first + last) / 2);

        if(arr[middle][param] === searchValue) {
            found = true;
        } else if(arr[middle][param] > searchValue) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }

    return middle;
}
