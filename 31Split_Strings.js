

/* 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

let str = 'abcdefрлk'


function solution(str){
    let arr = []
    let item
    if(str.length%2 !== 0){
        str = str+'_'
    }
    for(let i = 0; i<=str.length-2;i++){
        item = str[i]+str[i+1]
        arr.push(item)
            i++
    }
   return arr
} 

console.log(solution(str))
