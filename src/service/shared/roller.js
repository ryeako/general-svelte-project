const getRandomNumber = (max = 0) => {
    return Math.floor(Math.random() * max);
}

const rollDice = (dice) => {
    if (dice === undefined) return 0;

    let diceReturn = {
        'rolledDice': [],
        'total': 0
    };
    let diceNum = 1;
    let diceType = 1;

    if (dice === '') return diceReturn;
    if (dice.indexOf('d') === -1) return diceReturn;

    const diceSplit = dice.split('d').filter(d => d);

    if (diceSplit.length === 1 && !isNaN(diceSplit[0])) {
        diceType = parseInt(diceSplit[0]);
    }
    
    if (!isNaN(diceSplit[0]) && !isNaN(diceSplit[1])) {
        diceNum = parseInt(diceSplit[0]);
        diceType = parseInt(diceSplit[1]);
    }

    let sum = 0;
    for (let i = 0; i < diceNum; i++) {
        const roll = getRandomNumber(diceType) + 1;
        diceReturn.rolledDice.push(roll);
        sum += roll;
    }
    diceReturn.total = sum;

    return diceReturn;
}


module.exports = {
    getRandomNumber,
    rollDice
}