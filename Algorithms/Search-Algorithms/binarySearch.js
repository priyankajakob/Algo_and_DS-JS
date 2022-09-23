// Given a sorted array of n elements, find the target element's index

function binarySearch(arr,target) {
    if (arr.length == 0) {
        return -1
    }

    if (arr.length == 1 ) {
        return (arr[0]==target?0:-1)
    }

    let left = 0, right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left+right) / 2)
        if (target === arr[mid]) {
            return mid
        }

        if (target > arr[mid]) {
            left = mid + 1
        } else if(target < arr[mid]) {
            right = mid - 1
        }
    }

    return -1

}

//Big O = O(log n)

console.log(binarySearch([2],2))
console.log(binarySearch([2,3,4,5,6,7,10,23,31],4))
console.log(binarySearch([2,3,4,5,6,7,10,23,31],10))
console.log(binarySearch([2,3,4,5,6,7,10,23,31],31))
console.log(binarySearch([2,3,4,5,6,7,10,23,31],2))