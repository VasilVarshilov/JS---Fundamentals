function solve(dayType, age) {
    
    var result = ''
    if (age >= 0 && 18 >= age) {
        if (dayType == 'Weekday') {
            result = 12;
        } else if (dayType == 'Weekend') {
            result = 15;
        } else if (dayType == 'Holiday') {
            result = 5;
        }
    } else if (age >= 18 && 64 >= age) {
        if (dayType == 'Weekday') {
            result = 18;
        } else if (dayType == 'Weekend') {
            result = 20;
        } else if (dayType == 'Holiday') {
            result = 12;
        }
    } else if (age > 64 && 122 >= age) {
        if (dayType == 'Weekday') {
            result = 12;
        } else if (dayType == 'Weekend') {
            result = 15;
        } else if (dayType == 'Holiday') {
            result = 10;
        }
    } else {
        console.log('Error!');
        return;
    }
    console.log(result + '$')
}
solve('Weekday', 64)