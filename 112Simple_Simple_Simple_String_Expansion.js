

function stringExpansion(s) {
/*     Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string.

Notes
The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears
If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
Empty strings should return an empty string.
Your code should be able to work for both lower and capital case letters.

"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string
 */


  s = s.split('')
  let multi = -1
  for(let i = 0; i<=s.length; i++){
    if(Number(s[i] >=0)){
     multi = Number(s[i])
       s.splice(i,1, ".")
    }
    if(i <s.length-1){
        if(!Number(s[i+1]) && multi>=0){
       multi>0 ? s[i+1] =  s[i+1].repeat(multi) : s[i+1] = ''   
    } 
    }
  }
  s = s.filter((el)=> el !== '.')
  return s.join('')
}
