function solve(pass) {
    let truePassword = pass.shift();
    let attCounter = 0;
    for (let i = 0; i < pass.length; i++) {
        let stringToArray = pass[i].split('');
        stringToArray = stringToArray
            .reverse()
            .join('');

        attCounter++; 
        if (attCounter >= 4) {
            console.log(`User ${truePassword} blocked!`);
            return;
        }
        if (stringToArray == truePassword) {
            console.log(`User ${stringToArray} logged in.`);
        } else {
            console.log("Incorrect password. Try again.");
        }
       
    }

}

// solve(['Acer', 'login', 'go', 'let me in', 'recA']);
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])