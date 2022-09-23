function bubbleSort(arr) {
  if (arr.length == 1) return arr;

//   let j = arr.length-1;
//   while(j>=0) { //O(n)
//     for (let i = 0; i < arr.length; i++) { //O(n)
//         if (arr[i] > arr[i + 1]) {
//           let temp = arr[i + 1];
//           arr[i + 1] = arr[i];
//           arr[i] = temp;
//         }
//       }
//     j-=1
//   }

let swapped = true

while (swapped) { //O(n)
  swapped = false
  for (let i = 0; i < arr.length; i++) { //O(n)
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true
      }
    }
  
}
  
  return arr
}

//Big O = O(n^2)

console.log(bubbleSort([0,20,8,120,-2,1,4]))
