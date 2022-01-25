import * as treasureData from './../../data/ose/treasure.json';
import * as roller from './../shared/roller';

export function getTreasureList() {
    const unselected = {
        "type": ""
    };

    const treasureList = treasureData.default;
    treasureList.unshift(unselected);
    return treasureData.default;
}

export function getGemValue() {
    const value = roller.getRandomNumber(20)+1;

    if (value >= 1 && value <= 4) return 10;
    if (value >= 5 && value <= 9) return 50;
    if (value >= 10 && value <= 15) return 100;
    if (value >= 16 && value <= 19) return 500;
    if (value === 20) return 1000;
}