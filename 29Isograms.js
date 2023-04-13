

/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case) */

    let str = 'asvzz'
    function isIsogram(str){
        str = str.toLowerCase()
        let arr = [...str]
        let result
        let count = 0;
       while(count<=str.length){
            let elem = arr.splice(1, 1).join();
            if(arr.includes(elem)){
                result = false
                break
            } else{
                result = true
            }
            count++
        }
        return result 
} 
console.log(isIsogram(str))
