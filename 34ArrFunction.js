

let array = [5, 8, 6, 3, 4] ;


function sortArray(array) {
  let arrayN = []
   array.forEach((element) => {
    if(element%2 !== 0){
        arrayN.push(element)
    }
  });
 arrayN = arrayN.sort((a,b)=>a-b)    
  let i = 0;
  for(let element of array){
    if(element%2 == 1){
        array[array.indexOf(element)] = arrayN[0]
        console.log(arrayN)
        i++
    }
  } 
  return array
}
 
console.log(sortArray(array))



