
/*      Create a function called args_count that returns the number of arguments provided
    Test.assertEquals(args_count(1, 2), 2);
Test.assertEquals(args_count(), 0);
Test.assertEquals(args_count('A', 'B', 'C'), 3);
Test.assertEquals(args_count(["foo", "bar"]), 1); */

function args_count (...arg){
  let arr = [...arg]
  return arr.length 
}
