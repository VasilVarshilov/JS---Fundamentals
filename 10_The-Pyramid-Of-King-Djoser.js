function solve(base, inc){

    let stone, marble, lapis, gold, steps, totalHeight, stoneCount, marbelCount, lapisCount;
    steps = 0;
    stoneCount = 0;
    marbelCount = 0;
    lapisCount = 0;

    for(let i=1; i = base; i++){
        steps++;

        if(base -2 <= 0){
            gold = (base * base) * inc;
            totalHeight = steps * inc;
            break;
        }

        if(steps % 5 === 0 && base != 1){
            stone = ((base - 2) * (base - 2)) * inc;
            lapis = ((base*4)-4)*inc;
            lapisCount+= lapis;
            stoneCount+= stone;
        }else{
            stone = ((base - 2) * (base - 2) * inc);
            marble = ((base*4)-4)*inc;
            stoneCount+= stone;
            marbelCount+= marble;
        }
        base -= 2;

    }

    console.log("Stone required: " + Math.ceil(stoneCount))
    console.log("Marble required: " + Math.ceil(marbelCount))
    console.log("Lapis Lazuli required: " + Math.ceil(lapisCount))
    console.log("Gold required: " + Math.ceil(gold))
    console.log("Final pyramid height: " + Math.floor(totalHeight))
}
