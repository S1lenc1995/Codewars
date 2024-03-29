

/* In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.
More examples in test cases.

Good luck! */

function solve(arr){
  let mainArr = []
  for(let i = 0; i<=Math.max(...arr); i++){
    let numberArr = []
    arr.forEach((el)=>{
      if(el == i){
        numberArr.push(i)
      }
    })
    if(numberArr.length>=1){
      mainArr.push(numberArr)
    }
  }
 let res = mainArr.sort((a,b) => {
    if(a.length == b.length){
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;    
}
   return b.length - a.length
    })
  return [].concat.apply([], res);
}
