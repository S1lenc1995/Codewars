

/* Task
Yesterday you found some shoes in your room. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example
For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [0, 23]]
the output should be true;

For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [1, 23]]
the output should be false.

Input/Output
[input] 2D integer array shoes
Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

[output] a boolean value

true if it is possible to pair the shoes, false otherwise.
 */

let shoes = [
  [ 1, 70 ], [ 1, 69 ], [ 0, 96 ], [ 0, 2 ],
  [ 1, 13 ], [ 1, 50 ], [ 0, 62 ], [ 1, 39 ],
  [ 0, 5 ],  [ 0, 37 ], [ 1, 62 ], [ 1, 37 ],
  [ 0, 50 ], [ 1, 64 ], [ 0, 70 ], [ 0, 97 ],
  [ 1, 79 ], [ 1, 85 ], [ 1, 4 ],  [ 0, 18 ],
  [ 0, 4 ],  [ 0, 39 ], [ 1, 5 ],  [ 1, 81 ],
  [ 0, 69 ], [ 0, 28 ], [ 1, 96 ], [ 1, 2 ],
  [ 0, 46 ], [ 0, 81 ], [ 0, 4 ],  [ 1, 4 ],
  [ 0, 99 ], [ 0, 79 ], [ 0, 13 ], [ 1, 99 ],
  [ 1, 18 ], [ 1, 94 ], [ 1, 86 ], [ 0, 94 ],
  [ 1, 46 ], [ 1, 97 ], [ 0, 86 ], [ 1, 28 ],
  [ 0, 85 ], [ 0, 64 ]
]

function pairOfShoes(shoes) {
    let count = shoes.length
  for(let i = 0; i<=count; i++){
      let shoe = shoes[shoes.length - 1]
      for(let a = 0; a<shoes.length; a++){
        if(shoe[1] == shoes[a][1] && shoe[0] !== shoes[a][0]){
        shoes.splice(shoes.indexOf(shoe), 1)
        shoes.splice(shoes.indexOf(shoes[a]), 1) 
        break
        }
      }
      
  }
	return shoes.length>0 ? false : true  
}

console.log(pairOfShoes(shoes))
