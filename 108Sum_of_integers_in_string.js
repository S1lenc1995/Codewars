
/*     Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested. */


    function sumOfIntegersInString(s){
  let count = 0
  for(let i = 0; i<=s.length; i++){
      let number = parseInt(s.match(/\d+/))
      if(+number || number == 0){
        count += number
        s = s.replace(String(number), '');
        number = Number(number)
      }
  } 
  return count
}
