

/* Task
Write function which validates an input string. If the string is a perfect square return true,false otherwise.

What is perfect square?
* We assume that character '.' (dot) is a perfect square (1x1) * Perfect squares can only contain '.' (dot) and optionally '\n' (line feed) characters.
* Perfect squares must have same width and height -> cpt.Obvious
* Squares of random sizes will be tested!
Function input:
perfectSquare = "...\n...\n...";    

// This represents the following Perfect Square:

`...
 ...
 ...`
                               
notPerfect = "..,\n..\n...";

// This is not a Perfect Square:

`..,
 ..
 ...` */

 
    function perfectSquare(string){
 let arr = string.split('\n')
 let flag = true
 let trueLength = arr[0].length
 console.log(arr)
  arr.forEach((el)=>{
    if(trueLength !== el.length){
      flag = false
    }
    for(let a of el){
      if(a !== '.'){
        flag = false
      }
    }
  })
  if(trueLength !== arr.length){
    flag = false
  }
  
  return flag

  
}
