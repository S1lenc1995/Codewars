
/*     Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number. */


function divCon(x){
  let stringNumbers = 0
  let normalNumbers = 0
  for(let i = 0; i<x.length; i++){
      typeof x[i] === 'number' ? normalNumbers+= x[i] : stringNumbers+= Number(x[i]) 
  }
 
  return  normalNumbers - stringNumbers
}


