//Problem : Given number 'n' , determine it is prime or not

function isPrimeNumber(n) {
 if (n<2) {
    return false
 }

 for (let i=2;i<n;i++) { //0(n)
    if (n%i == 0)
    {
        return false
    }
 }

 return true
}

console.log(isPrimeNumber(11))