function solve(base, increment) {
    base = parseFloat(base);
    increment = parseFloat(increment);
    let totalHeight = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let counter = 0;

    while (base >=1 ) {
        counter += 1;
        let outerLayer = 0;
        let total = base * base;
        if (counter % 5 === 0) {
            outerLayer = (4 * base - 4);
            lapisLazuli += outerLayer;
            stone += (total - outerLayer);
        } else if (base <= 2) {
            gold = total;
        } else {
            outerLayer = 4 * base - 4;
            marble += outerLayer;
            stone += (total - outerLayer);
        }
        base -= 2;
    }

    stone = Math.ceil(stone * increment);
    marble = Math.ceil(marble * increment);
    lapisLazuli = Math.ceil(lapisLazuli * increment);
    gold = Math.ceil(gold * increment);
    totalHeight = Math.floor(counter * increment);

    console.log(`Stone required: ${stone}\nMarble required: ${marble}\nLapis Lazuli required: ${lapisLazuli}\nGold required: ${gold}\nFinal pyramid height: ${totalHeight}`);

}
solve(11, 0.75);