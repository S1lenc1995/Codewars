

/* I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

 */

function nthFibo(n) {
  let arr = [0, 1]
  if(n == 1){
    return 0
  }
    if(n == 2){
    return 1
  }
  for(let i = 0; i<=n; i++){
      let count = arr[i] + arr[i+1]
       arr.push(count)
  }
  return arr[n-1]
}

console.log(nthFibo(4))
