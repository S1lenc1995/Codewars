
  /*   Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u. */

function consonantCount(str) {
 let alp = 'bcdfghjklmnpqrstvwxyz'
 str = str.toLowerCase()
 let count = 0
 for(let i of str){
   if(alp.includes(i)){
     count++
   }
 }
  return count
}
