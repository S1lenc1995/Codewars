
/* 
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14 */


function getSumOfDigits(integer) {
let string = String(integer)
let arr = string.split('')
let sum = 0
for(let i = 0; i< arr.length; i++){
  let number = Number(arr[i])
  sum += number
}
  return sum
}
