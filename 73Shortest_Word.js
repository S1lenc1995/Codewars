

/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

    let s = "bitcoin take over the world maybe who knows perhaps"
    function findShort(s){
        s = s.split(' ')
        let arr = []
        s.forEach((el)=>{
            arr.push(el.length)
        })
        let min = Math.min(...arr);   
        return min   
}

findShort(s)


