

/* 
Prince Arthas needs your help! Mal'ganis has spread an infection amongst the Stratholme citizens, and we must help Arthas prevent this infection from spreading to other parts of the Kingdom.

You will receive a string s as input: Each "word" represents a house, and each letter represents a citizen. All infected citizens are represented as "i" or "I" in s. You must eradicate them, and their neighbors. If an infected citizen appears after or before a space, you should not delete the space, but keep in mind that the distance from "house" to "house" (word to word) has to have only one whitespace.

EXAMPLES:

"STRING"                       -> "STG"
"1i2 33 i4i5 i555ii5"          -> "33 5"
"It is a bit chilly"           -> "a cly"
"Pineapple pizza is delicious" -> "eapple za deus"
"It is not there"              -> "not there"
NOTES:

There are no apostrophes or any non-alphanumeric characters other than whitespaces.
Make sure there are no leading or trailing spaces in the result string
You will always be given a valid string.
You won't be provided any empty strings.
Good luck and for the Alliance! */



let s = 'Iron Maiden'

function purifyTheStratholme(s) {
  console.log(s)
   s = s.split('')
      
       
        
       for(let a = s.length-1; a>=0; a--){
       if(s[a]== 'i' || s[a] == 'I'){
        s.splice(a,1, '.')
        if(s[a+1] !== ' ' && s[a+1] !== "i" && s[a+1] !== 'I' ){
            s.splice(a+1,1, '.')
        }
         if(s[a - 1] !== ' ' && s[a - 1] !== "i" && s[a - 1] !== 'I' ){
             if(a == 0){
                break
            }
            s.splice(a-1 ,1, '.')
        } 
       }
    }


     s = s.filter(function(f) { return f !== '.' });

    s = s.join('')
    s = s.replace(/ {1,}/g," ")
    s = s.trim()
        
      return s
}
console.log(purifyTheStratholme(s))



