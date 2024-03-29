


/* It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
The function should return an object/dict with the same names, showing how much money the members should pay or receive.
Further points:

The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
If value is a decimal, round to two decimal places.
Translations and comments (and upvotes!) welcome.

Example
3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

var group = {
    A: 20, 
    B: 15, 
    C: 10
}

splitTheBill(group) // returns {A: 5, B: 0, C: -5} */
    


let group = {
    A: 20.3434,
    B: 15.45454,
    C: 10.4445453
}

function splitTheBill(group) {
let sum = 0;
let friends = 0;
for (let key in group){
    sum +=group[key]
    friends ++
}
let costs = sum / friends
for (let key in group){
    group[key] =  group[key] - costs
    if (!Number.isInteger(group[key])){
       const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
        if(f(group[key])>1){
            group[key] = parseFloat(group[key].toFixed(2))
        }
      if(f(group[key]) === 1){
            group[key] = parseFloat(group[key].toFixed(1))
        }
       
    }
}
return group
}

