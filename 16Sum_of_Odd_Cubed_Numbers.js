
    /* Find the sum of the odd numbers within an array, after cubing the initial integers.The function should return undefined if any of the values aren't numbers.
 */

    let arr = [2, 3, 5]
    function cubeOdd(arr) {
        let sum = 0
        arr = arr.map((value) => {
            return Math.pow(value, 3);
        })
        for (let i of arr) {
            if (typeof (i) !== 'number' || isNaN(i)) {
                return undefined
            }
            else if (i % 2 !== 0) {
                sum += i
            }
        }
        return sum;
    } 

    console.log(cubeOdd(arr))


