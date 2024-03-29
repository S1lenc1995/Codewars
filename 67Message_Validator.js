


/* You are frantically studying for your exams. To do so you need to frequently visit the library to get your revision time in.

You will be given a string as a parameter letting you know the current time. The passed string will be given in the form:

"Monday 12:35"
Your task is to create a function which lets you know either:

-When the library closes if it is open or,

-When the library opens if it is closed.

If the library is closed and opens later in the current day, you want your return string to say:

"Library opens: today XX:XX"
Where "XX:XX" is the time the library opens in a 24 hour format.

If the library is closed and opens the next day, you want your return string to say:

"Library opens: WEEKDAY XX:XX"
Where "WEEKDAY" is the next day that the library opens.

If the library is open, you want to return:

"Library closes at XX:XX"
Where "XX:XX" is the time that the Library closes.

You can see the opening times of the library below.

Opening Times -
Monday:  08:00 - 20:00 
Tuesday:  08:00 - 20:00
Wednesday:  08:00 - 20:00
Thursday:  08:00 - 20:00
Friday:  08:00 - 20:00
Saturday:  10:00 - 18:00
Sunday:  12:00 - 16:30
Some things to note:

-The string given will always be in the form "WORD XX:XX" Where "X" will always be a digit from 1-9.

-Capitalisation of the passed string should not affect the outcome.

-The time is given in a 24 hour format (your return string should also be in this format).

-If the first word of the passed string is not a weekday or the time is invalid your function should return "Invalid time!".

-The format of your returned weekday should start with a capital, with all other characters in lower case eg Monday.

-The first letter of the returned string should always be a capital.

Examples:

openingTimes("Monday 09:30"); //returns "Library closes at 20:00" 

openingTimes("Saturday 00:00"); //returns "Library opens: today 10:00"

openingTimes("Tuesday 20:00"); //returns "Library opens: Wednesday 08:00"

openingTimes("MoNDay 07:59"); //returns "Library opens: today 08:00"

openingTimes("Tuesday 13:61"); //returns "Invalid time!"

openingTimes("wednsay 12:40"); //returns "Invalid time!"
Happy coding! */





 let aaa = "Saturday 18:00"
 let bbb = aaa.split(' ')
 let word = bbb[0].toLocaleLowerCase()
 let qqq = bbb[1].split(':')
console.log(bbb) 
let NowTime = new Date
 NowTime.setHours(qqq[0],qqq[1]) 

 let weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'monday']

if(!weekDays.includes(word) || qqq[0] > 24 || qqq[1] > 59 ){
    console.log ("Invalid time!")
}



let openWorkDay = new Date 
openWorkDay.setHours(8)
if(word == 'saturday'){
    openWorkDay.setHours(10)
}
if(word == 'sunday'){
    openWorkDay.setHours(12)
}

let closeWorkDay = new Date
closeWorkDay.setHours(19,59)
if(word == 'saturday'){
    closeWorkDay.setHours(18)
}
if(word == 'sunday'){
    closeWorkDay.setHours(16, 30)
}





    if(weekDays.includes(word) &&  NowTime < openWorkDay){
        let time = '8:00'
        if(word == 'saturday'){time = '10:00'}
        if(word == 'sunday'){time = '12:00'}
        console.log(`Library opens: today ${time}`)
    }
    if(weekDays.includes(word) &&  NowTime > closeWorkDay ){
        let time = '8:00'
        if(word == 'friday'){time = '10:00'}
        if(word == 'saturday'){time = '12:00'}
        console.log(`Library opens: ${weekDays[weekDays.indexOf(word) + 1].charAt(0).toUpperCase() + weekDays[weekDays.indexOf(word) + 1].slice(1) } ${time}`)
    }

    if(weekDays.includes(word) &&  NowTime >= openWorkDay &&  NowTime <= closeWorkDay ){
        let time = '20:00'
        if(word == 'saturday'){time = '18:00'}
        if(word == 'sunday'){time = '16:30'}
        console.log(`Library closes at ${time}` )
    }


