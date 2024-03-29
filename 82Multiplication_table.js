

/* Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]] */


multiplicationTable = function(size) {
  let table = []
  let nextRow = []
  let startArr = []
  for(let i=1; i<=size; i++){
    startArr.push(i)
  }
  table.push(startArr) 
    

  for(let i = 1; i<size; i++){
    startArr.forEach((el)=>{
        let number = el * (i+1)
        nextRow.push(number)
    })
    table.push(nextRow)
    nextRow = []
  }
  return table
}

multiplicationTable(3)


