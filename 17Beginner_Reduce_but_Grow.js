
   /*  Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(x){
let a = 1
for(let i of x){
  a = a*i
}
  return a
}
