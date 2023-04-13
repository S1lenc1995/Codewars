
/*     The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;
   */
 

   let aaa = [ function add (input){
    return input +3
  },
  function mult(input) {
  return input * 10;
},
   function addd (input){
    return input +5
  }]
 
 
 
function chain (input, aaa) {
  input = aaa[0](input);
  input = aaa[1](input);
  input = aaa[2](input);
  return input;
}

console.log(chain(3,aaa))


