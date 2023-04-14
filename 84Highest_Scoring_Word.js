

/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */




    function high(x){
  x = x.split(' ')
  let alp = ' abcdefghijklmnopqrstuvwxyz'
  let arr = []
  x.forEach((el)=>{
    let wordSum = 0
    for(let i of el){
      let count = alp.indexOf(i)
      wordSum +=count
    }
    arr.push(wordSum)
  })
  
  let maxSum = Math.max(...arr);
  let indexOfBigerWord = arr.indexOf(maxSum)
  return x[indexOfBigerWord]
}
