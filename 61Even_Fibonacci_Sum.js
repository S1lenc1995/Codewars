
/*     Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonnacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example: */

    function fib (num){
        let arr = [0, 1]

        for(let i = 2; i<10; i++){
            let num1 = arr[i - 1];
            let num2 = arr[i - 2];
            let numFib = num1 + num2
            if(numFib<num){
                arr.push(numFib)
            }
        }
     let count = 0 
     arr.forEach((el)=>{
        if(el%2 == 0){
            count +=el
        }
     })

     return count
    }

    console.log(fib(10))
