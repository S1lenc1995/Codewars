
let a1 = ["live", "strong", "arp"]

let a2 =  ["lively", "alive", "harp", "sharp", "armstrong"]


function inArray(a1,a2){
   let aaa =[]
    a1.forEach(el=>{
        for(let i of a2){
            if(i.includes(el)){
            aaa.push(el)
            break
        }
        }
  })
  return aaa.sort() 
}

console.log(inArray(a1,a2))


