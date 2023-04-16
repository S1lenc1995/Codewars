/* Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!" */

function remove (string) {
    string = string.split(' ')
    let arr = string.map((el)=>{
      let str = el.split('')
      str = str.filter((el)=> el == '!')
      if(str.length !==1){
        return el
      }
    })
    arr = arr.filter((el)=> el !== undefined)
    arr = arr.join(' ')
    return arr
  }