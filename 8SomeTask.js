
/* В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

Примеры
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5" */

let numbers = "-32 2 3 4 5"

function highAndLow(numbers){
let arr = numbers.split(' ')
let b = `${Math.max(...arr)} ${Math.min(...arr)}` 
return String(b)
} 

console.log(highAndLow(numbers))
