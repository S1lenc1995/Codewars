
/*     Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]
     */
    
    
    
    let n = 3528;
    function digitize(n) {
     n = n.toString() 
  let arr = [];
  for(let numbers of n){
    let number = Number(numbers)
    arr.unshift(number)
  }
  return arr;
} 

digitize(n)
console.log(digitize(n))
