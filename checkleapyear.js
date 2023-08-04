function isleapyear(year) {

    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return " year is a leap year "
    }
    else
        return " year is not a leap year "

}

const myYear = 1999;
console.log(myYear, isleapyear(myYear));