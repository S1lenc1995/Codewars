
/* Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested. */



  let s =  "hello example (words(more words) here) something"

  function removeParentheses(s){
    s = s.split('')
    
    
    for(let a = 0; a<= s.length; a++){
    let lastItemOpen = s.lastIndexOf('(')
    for(let i = lastItemOpen; i<=s.length; i++){
        if(s[i] == ')'){
            let deleteItems = i - lastItemOpen + 1
            s.splice(lastItemOpen, deleteItems)
            break
        }
    }
}




    s = s.join('')
    console.log(s)
    return s
    

}

removeParentheses(s)
