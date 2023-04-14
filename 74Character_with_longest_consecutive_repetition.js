

/* For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :) */

    let s = 'bbbaaabaaaa'

 function longestRepetition(s) {
   if(s==''){
            let a = ["",0]
            return a
            
        }
  let arr = []
        let arrLeter = []
        let result = []
        s = s.split('')
        let count = 0
        for(let i = 0; i<=s.length; i++){
            if(s[i] === s[i+1]){
                count++ 
            } else{
                arrLeter.push(s[i])
                arr.push(count+1)
                count = 0
            }
        }

        let lengthMax = Math.max(...arr)
        let leter = arrLeter[arr.indexOf(lengthMax)]
        result.push(leter)
        result.push(lengthMax)
        return result
}
  


longestRepetition(s)
