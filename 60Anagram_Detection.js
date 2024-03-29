
/* An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK" */

  let test = "foefet"
  let original = "toffee"
  var isAnagram = function(test, original) {
 let testLower = test.toLowerCase()
  let originalLower = original.toLowerCase()
  if(testLower.length !== originalLower.length){
    return false
  }
  for (let a of testLower){
    for(let b of originalLower){
      if(a === b){
       testLower = testLower.replace(a,'')
        originalLower = originalLower.replace(b,'')
      }
    }
  }
  return testLower.length == 0 && originalLower == 0 ? true:false
};

console.log(isAnagram(test, original))
 

