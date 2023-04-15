


/* You are organizing an olympiad and would like to create an algorithm to determine the podium. Simple, isn't it!?
An olympiad is a tournament with few rounds. Each round brings more or less points to the players. Good luck!

Input
A score object, containing the scores of all players for each round. For exemple:

{
  'Emy': [8, 12, 1],    // Emy scored 8 points in the first round, 12 points in the second and 1 point in the third.
  'Paul': [2, 6, -9],   // Paul scored 2 points in the first round, 6 points in the second and -9 points in the third.
  'Sandra': [3, 9, 7],  // Sandra scored 3 points in the first round, 9 points in the second and 7 points in the third.
  'Sue': [10, 2, 0],    // ...
  'Yseult': [8, 9, 3]
}
Your task
Return the podium in this form:

{
  'gold': {
    'score': 21,
    'players': ['Emy']
  },
  'silver': {
    'score': 20,
    'players': ['Yseult']
  },
  'bronze': {
    'score': 19,
    'players': ['Sandra']
  }
}
Rules
The best players are those with the most points accumulated.
In each round, players can score positive or negative points (between -100 and 100).
There may be a tie (Example 2).
Tied players share their medal (Example 2).
Names of tied players must be sorted in alphabetical order (Example 2).
When there is a tie, the following medal(s) are not awarded, like at the Olympic Games (Example 3).
Players are not required to participate in all rounds (Example 4).
If a player does not participate in any round, his scores is an empty array []. He is declared forfeit and cannot be on the podium (Example 4).
If by misfortune, there is no one on the podium. The olympiad is cancelled. Return {}.
Examples
Example 1
Input

{
  'Emy': [8, 12, 1],    // Emy scored a total of 21 points
  'Paul': [2, 6, -9],   // Paul scored a total of -1 point
  'Sandra': [3, 9, 7],  // Sandra scored a total of 19 points
  'Sue': [10, 2, 0],    // Sue scored a total of 12 points
  'Yseult': [8, 9, 3]   // Yseult scored a total of 20 points
}
Output

{
  'gold': {
    'score': 21,
    'players': ['Emy']
  },
  'silver': {
    'score': 20,
    'players': ['Yseult']
  },
  'bronze': {
    'score': 19,
    'players': ['Sandra']
  }
}
Example 2
Input

{
  'Emy': [8, 12, 1],    // Emy scored a total of 21 points
  'Sandra': [4, 6, 9],  // Sandra scored a total of 19 points
  'Paul': [3, 9, 7],    // Paul scored a total of 19 points
  'Sue': [10, 2, 0],    // Sue scored a total of 12 points
  'Yseult': [8, 9, 3]   // Yseult scored a total of 20 points
}
Output

{
  'gold': {
    'score': 21,
    'players': ['Emy']
  },
  'silver': {
    'score': 20,
    'players': ['Yseult']
  },
  'bronze': {
    'score': 19,
    'players': ['Paul', 'Sandra']
  }
}
Example 3
Input

{
  'Emy': [8, 12, 1],    // Emy scored a total of 21 points
  'Paul': [2, 6, 7],    // Paul scored a total of 15 points
  'Sandra': [3, 9, 7],  // Sandra scored a total of 19 points
  'Sue': [10, 11, 0],   // Sue scored a total of 21 points
  'Yseult': [8, 9, 3]   // Yseult scored a total of 20 points
}
Output

{                   // No silver medal!
  'gold': {
    'score': 21,
    'players': ['Emy', 'Sue']
  },
  'bronze': {
    'score': 20,
    'players': ['Yseult']
  }
}         
Example 4
Input

{
  'Emy': [12],      // Emy scored a total of 12 points
  'Sandra': [],     // shall be declared forfeited
  'Sue': [0, 0]     // Sue scored a total of 0 point
}
Output

{
  'gold': {
    'score': 12,
    'players': ['Emy']
  },
  'silver': {
    'score': 0,
    'players': ['Sue']
  }
}
 */



  function podium(scores) {
    /* let arr = Object.entries(scores) */
    let arrResult = []
    for (let key in scores) {
      if (scores[key].length == 0) {
        console.log(key)
        console.log('ssdssd')
        delete scores[key]
      }else{
      scores[key] = scores[key].reduce((sum, elem) => sum + elem, 0);
      arrResult.push(scores[key])
      }
     
    }

    arrResult = [...new Set(arrResult)]
    
    let length = Object.keys(scores).length;

    if(length == 0){
      return {}
    }
    





    let goldResult = Math.max(...arrResult)
    let goldNameAthleths = []
    for (let key in scores) {
      if (scores[key] == goldResult) {
        goldNameAthleths.push(key)

      }
    }
    arrResult = arrResult.filter((n) => n !== goldResult)


    let silverResult = Math.max(...arrResult)
    let silverNameAthleths = []
    for (let key in scores) {
      if (scores[key] == silverResult) {
        silverNameAthleths.push(key)
      }
    }
    arrResult = arrResult.filter((n) => n !== silverResult)



    let bronzResult = Math.max(...arrResult)
      let bronzNameAthleths = []
      for (let key in scores) {
        if (scores[key] == bronzResult) {
          bronzNameAthleths.push(key)
        }
      }
   

    




    if (goldNameAthleths.length == 1 && silverNameAthleths.length == 1 &&  bronzNameAthleths.length > 0) {
      return {
        'gold': {
          'score': goldResult,
          'players': goldNameAthleths.sort()
        },
        'silver': {
          'score': silverResult,
          'players': silverNameAthleths.sort()
        },
        'bronze': {
          'score': bronzResult,
          'players': bronzNameAthleths.sort()
        }
      }
    }



    if (goldNameAthleths.length == 1 && silverNameAthleths.length == 1) {
      return {
        'gold': {
          'score': goldResult,
          'players': goldNameAthleths.sort()
        },
        'silver': {
          'score': silverResult,
          'players': silverNameAthleths.sort()
        },
      }
    }


    if (goldNameAthleths.length == 2 ) {
      return {
        'gold': {
          'score': goldResult,
          'players': goldNameAthleths.sort()
        },
        'bronze': {
          'score': silverResult,
          'players': silverNameAthleths.sort()
        }
      }
    }

    if (goldNameAthleths.length >= 3 || (silverNameAthleths.length == 0 && bronzNameAthleths.length == 0) ) {
      return {
        'gold': {
          'score': goldResult,
          'players': goldNameAthleths.sort()
        },
      }
    }
    if (goldNameAthleths.length > 0 && silverNameAthleths.length == 0 && bronzNameAthleths.length == 0 ) {
      return {
        'gold': {
          'score': goldResult,
          'players': goldNameAthleths.sort()
        },
      }
    }

    



  }


  console.log(podium(example1))
