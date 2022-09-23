//Problem : Given an input n, find factorial of n


function factorial(n) {
 if(n==0 || n==1) {
    return 1
 } 
 let factorialVal = 1

 for (let i=2;i<=n;i++) { //0(n)
    factorialVal *= i
 }

 return factorialVal

}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(4))
console.log(factorial(5))