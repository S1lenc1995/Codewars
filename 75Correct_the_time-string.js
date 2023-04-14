
/*     A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges. */


function timeCorrect(timestring) {
      
      if(timestring === null ){
          return null
      }
   if(timestring === ''  ){
          return ''
      }
  let a = timestring.split('')
if(!a.includes(':') || a.length !== 8 ){
  return null
}
   


      let tryeItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':' ]
     
      let flag = false 

      a.forEach((el)=>{
          if(!tryeItems.includes(el)){
              console.log('+++')
              flag = true
              return null
             
          }
      })

      if(flag){
          return null
      }

     
      
     let s = timestring.split(':')
      
     let arr = s.map((el)=>{
          return Number(el)
      })
      console.log( arr[2])
      if(arr[2]>= 60){
          arr[2] = arr[2] - 60
          arr[1] = arr[1] + 1
      }
      if(arr[2]<10){
              console.log('er')
              arr[2] = '0' +  arr[2]
          } 

      if(arr[1]>= 60){
          arr[1] = arr[1] - 60
          arr[0] = arr[0] + 1
      }
      if(arr[1]<10){
              console.log('er')
              arr[1] = '0' +  arr[1]
          } 
      while(arr[0]>= 24){
          arr[0] = arr[0] - 24 
      }
 if(arr[0]<10){
              console.log('er')
              arr[0] = '0' +  arr[0]
          } 

     return `${arr[0]}:${arr[1]}:${arr[2]}` 
}

