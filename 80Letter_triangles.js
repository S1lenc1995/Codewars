

/* Letter triangles

Similar to Coloured triangles.

But this one sums indexes of letters in alphabet.

Examples

c o d e w a r s
c is 3
o is 15
15+3=18
18. letter in the alphabet is r
then append r
next is o d
sum is 19
append s
do this until you iterate through whole string
now, string is rsibxsk
repeat whole cycle until you reach 1 character
then return the char
output is l
codewars -> l
triangle -> d
C O D E W A R S
 R S I B X S K
  K B K Z Q D
   M M K Q U
    Z X B L
     X Z N
      X N
       L
A B C D
 C E G
  H L
   T
More examples

youhavechosentotranslatethiskata -> a
cod -> k
yes -> b
hours -> y
circlecipher -> z
lettertriangles -> o
cod -> rs -> k
abcd -> ceg -> hl -> t
codewars -> rsibxsk -> kbkzqd -> mmkqu -> zxbl -> xzn -> xn -> l
Note, if the sum is bigger than 26, then start over

Input will always be lowercase letters. Random tests contains strings up to 30 letters. */



    let row = 'youhavechosentotranslatethiskata'

    function triangle(row) {
  if(row.length == 1){
    return row
  }
    let alp = ' abcdefghijklmnopqrstuvwxyz'
    let count = row.length
let count2 = row.length -1

 
    for(let i=0; i<count; i++){
        let a =''
         for(let i=0; i<count2; i++){
          let newLeter = alp.indexOf(row[i]) + alp.indexOf(row[i+1])
          if(newLeter>26){
            newLeter = newLeter - 26
          }
           a +=alp[newLeter] 
        } 

        --count2
     
        row = a
        console.log(row)
        if(row.length==1){
            break
        }  
} 
return row

}



