
/*     Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str){
  if(str == '') return ''
  str = str.split(/_|-/)
  let arrUp = str.map((el)=>{
    return el[0].toUpperCase() + el.slice(1);
  })
  arrUp[0] = str[0]
  return arrUp.join('')
}
