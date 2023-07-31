function pipeFix(numbers){
    for(let i = Math.min(...numbers); i<Math.max(...numbers); i++){
      if(!numbers.includes(i)){
        numbers.push(i)
      }
    }
      return numbers.sort((a,b)=>a-b)
    }