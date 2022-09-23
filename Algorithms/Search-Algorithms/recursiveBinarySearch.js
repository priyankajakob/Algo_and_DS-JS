function recursiveCheck (arr,left,right,target) {

  //Base case
  if (left>right) {
    return -1
  }
  
  let mid = Math.floor((left+right)/2)

  if (arr[mid]==target) {
    return mid
  } 

  else if (target < arr[mid]) {
    return recursiveCheck(arr,left,mid,target)
  }

  else if (target > arr[mid]) {
    return recursiveCheck(arr,mid+1,right,target)
  }

}


function recursiveBinarySearch(arr,target) { 

  if (arr.length == 0 ) {
    return -1
  }
  if (arr.length == 1) {
    return ( arr[0] == target ? 0 : -1 )
  }

  let left = 0
  let right = arr.length - 1

  return recursiveCheck(arr,left,right,target)

}

console.log(recursiveBinarySearch([2],2))
console.log(recursiveBinarySearch([2,3,4,5,6,7,10,23,31],4))
console.log(recursiveBinarySearch([2,3,4,5,6,7,10,23,31],10))
console.log(recursiveBinarySearch([2,3,4,5,6,7,10,23,31],31))
console.log(recursiveBinarySearch([2,3,4,5,6,7,10,23,31],2))

