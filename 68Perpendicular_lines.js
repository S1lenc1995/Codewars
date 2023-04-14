
/* 
You are given an input (n) which represents the amount of lines you are given, your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.

Note: A perpendicular bisector is one that forms a 90 degree angle

n will always be greater than or equal to 0
Examples with 3 and 4 liness */




function maxBisectors(n) {
  let verticalLines = n / 2
  verticalLines = Math.floor(verticalLines)
  let gorizontLines =  n -  verticalLines
  let count = 0
  
  for (let i = 1; i<=gorizontLines; i++){
    count += verticalLines
  }
  
  return count
} 


