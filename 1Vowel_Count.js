
/*     Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */


function getCount(str) {
  let sum = 0;
  const vowels = ['a','e','i','o','u'];
  for (let char of str.toLowerCase()){
    if(vowels.includes(char)){
      sum +=1
    }
  } 
  return sum;
}


