const sumSquareEvenRootOdd = ns => {
    let sum = 0
   const arr = ns.map((el)=>{
     return el%2 == 0 ? el*el : Math.sqrt(el)
   })
   arr.forEach((el)=>{
     sum +=el
   })
   return Number(sum.toFixed(2))
  };
