function leapYear(givenYear) {

    if ((givenYear % 4 === 0 && givenYear % 100 !== 0) || (givenYear % 400 === 0) ){
        console.log("yes");
    }
    else {
        console.log("no");
    }
    
}

leapYear();