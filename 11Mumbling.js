
/*    This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */
   
   
function accum(s) {
	  let a =[]
    let counter = 1
    for(let i of s){
    i = i.toLowerCase()
    let b = i.repeat(counter)
    b = b[0].toUpperCase() + b.slice(1)
    a.push(b)
    counter++
    } 
    a = a.join('-') 
  return a
}
