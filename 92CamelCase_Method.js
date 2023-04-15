
/*     Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord */

String.prototype.camelCase=function(){

let arr = this.split(' ')
console.log(arr)
let newArr = arr.filter((e)=> e !== '')
 newArr = newArr.map((el)=>{
  return el[0].toUpperCase() + el.slice(1);
})

newArr = newArr.join('')
return newArr
}


