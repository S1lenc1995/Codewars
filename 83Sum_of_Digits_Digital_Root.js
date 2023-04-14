/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2  */





function digitalRoot(n) {
  n = String(n)
  let sum = 0
  
for(let a = 0; a<=n.length; a++) {
    for(let i =0; i<=n.length-1; i++){
    let b = +n[i]
    sum = sum + b
   
  }
  console.log(sum)
  if(sum<10){
    break
  }else{
    n = String(sum)
    sum = 0
  }
 
}



  return sum

}

console.log( digitalRoot(88157))

