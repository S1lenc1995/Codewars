
    
/*     The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.
    
    let lamps = 'xxxxxxx';
    let drone = '===T';
 */ 

    function flyBy(lamps, drone){
        let lamp = [...lamps]
        let dron = [...drone]
        let length = lamp.length
        lamp.splice(0, dron.length)
        if(  dron.length> length){
            for(let i = 1; i<=length; i++){
            lamp.unshift('o')
        }
        }
        else {
            for(let i = 1; i<=dron.length; i++){
            lamp.unshift('o')
        }
    }
        return lamp.join('')
}

console.log(flyBy(lamps, drone))
