function printAndSum(start, end) {

    let outputNumbers = "";
    let totalSum = 0;
    
    for (let i = start; i <= end; i++) {
       outputNumbers += `${i} `;
       totalSum += i;
    }
console.log(outputNumbers);
console.log("Sum: " + totalSum);

}

printAndSum(9, 19);