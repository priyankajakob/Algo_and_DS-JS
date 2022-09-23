function linearSearch(arr, target) {
    if (arr.length == 0) {
        return -1
    }

    for (let i=0;i<arr.length;i++) { //0(n)
        if (arr[i]=== target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([2,4,100,45],10))