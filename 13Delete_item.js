
/* Убрать восклицательный знак в конце строки. Для начинающего ката можно считать, что входные данные всегда являются строкой, проверять ее не нужно.

Примеры
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
 */
   let string='Hdf'
    
    function remove (string) {
  if( string[string.length-1] == '!'){
   string = string.slice(0, string.length-1)
  } 
  return string
}
console.log(remove(string))
