
    function compeirNumbers (arr){
        let maxNumber = Math.max(...arr);
        let count = arr.reduce((a, b) => a + b);
        return maxNumber >= count
    }
    compeirNumbers([3,2,4,5])
