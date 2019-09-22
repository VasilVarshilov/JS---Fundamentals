function solve(arr) {

    let bitPrice = 11949.16;
    let goldPrice = 67.51;

    let totalBitCoins = 0;
    let dayFirstBitWasBought = 0;
    let money = 0;
    let days = 0;
    for (let i = 0; i < arr.length; i++) {
        days++;
        let dayGold = arr[i];
        days % 3 == 0 ? dayGold = dayGold * 0.70 : dayGold = dayGold;
        money += dayGold * goldPrice;
        
        while (money >= bitPrice) {
            if (money >= bitPrice) {
                totalBitCoins++;
                money -= bitPrice;
                totalBitCoins == 1 ? dayFirstBitWasBought = i + 1 : dayFirstBitWasBought = dayFirstBitWasBought;
            }
        }

    }

    console.log(`Bought bitcoins: ${totalBitCoins}`);
    totalBitCoins >= 1 ? console.log(`Day of the first purchased bitcoin: ${dayFirstBitWasBought}`) : goldPrice = goldPrice;
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}

solve([3124.15, 504.212, 2511.124]);