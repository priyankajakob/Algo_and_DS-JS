function powerOfTwo(num) {
    for(let i=0;i<num;i++) {
        if(num==Math.pow(2,i))
        return true
    }
    return false
}

console.log(powerOfTwo(3))