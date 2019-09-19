function solve(num) {
    let oddCounter = num;
    let counter = 1;
    let sum = 0;

    while (oddCounter > 0) {
        if (counter % 2 == 1) {
            console.log(counter);
            sum += counter;

            oddCounter--;
        }

        counter++;
    }
    console.log("Sum: " + sum);
}
solve(5);