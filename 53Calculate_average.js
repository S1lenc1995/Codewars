
/*     Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */


function findAverage(array) {
  let a = 0
  array.forEach((el)=>{
    a+=el
  })
  let b = a/array.length
  return (array.length===0)  ?  0:b;
}

