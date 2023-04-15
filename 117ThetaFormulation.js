/* There were days in math class when I wished I had a simple way to quickly solve for any given variable in a formula and check my answers accordingly. If only I had a time machine...

Oh well! Anyhow, using the following formula:

Angle (in Radians) === Arc length / Radius length
Write a function thetaFormula:

When given two of the values and "?" returns the number value of the missing one.
When given all three values returns a boolean value verifying if the statement is true or false.
When given one or no values as arguments or invalid arguments returns null.
For Example:

    thetaFormula("?", 12, 35)        -->    0.343
    thetaFormula(3, "?", 14)         -->    42
    thetaFormula(5, 16, "?")         -->    3.2

    thetaFormula(2, 5, 7)            -->    false
    thetaFormula(2, 20, 10)          -->    true
    thetaFormula( -1, 1, -1)         -->    true

    thetaFormula(1, 2)               -->   null
    thetaFormula(1)                  -->   null
    thetaFormula()                   -->   null
    thetaFormula("?", "?", 2)        -->   null
If the returned value contains more than three numbers after the decimal it should be fixed to three decimal places. The function should be able to return negative values, they will be tested for.


 */
function thetaFormula(radius, arc, angle) {

console.log(typeof radius, typeof arc,  typeof angle)
if(radius == undefined || arc == undefined || angle == undefined){
return null
}
if(radius == "?" && arc ==  "?" && angle ==  "?"){
return null
}
if(radius == "?" && arc ==  "?"){
return null
}
if(arc ==  "?" && angle ==  "?"){
return null
}
if(angle ==  "?" && radius == "?"){
return null
}
if(radius == arc/angle || arc == radius * angle || angle == arc / radius){
return true
}



if(typeof radius === 'string' && radius !== "?" ){
return null
}
if(typeof arc === 'string' && arc !== "?"){
return null
}
 if(typeof angle === 'string' && angle !== "?"){
return null
}




if(radius == "?"){
let result = arc/angle
if(String(result).includes('.')){
  return Number(result.toFixed(3))
}
return result
}

if(arc == "?"){
 let result = radius * angle
  if(String(result).includes('.')){
  return Number(result.toFixed(3))
}
 return result

}
if(angle == "?"){
let result = arc / radius
if(String(result).includes('.')){
  return Number(result.toFixed(3))
}
  return result
}
 if(radius !== arc/angle || arc !== radius * angle || angle !== arc / radius){
return false
}
}
