import * as actions from './../../data/martial-arts/actions.json';
import * as adjectives from './../../data/martial-arts/adjectives.json';
import * as parts from './../../data/martial-arts/body-parts.json';
import * as creatures from './../../data/martial-arts/creatures.json';
import * as roller from './../shared/roller';

const template = (adjective, action, part, creature, adjective2, action2) => {
    return [
        `The ${adjective} ${action}`,
        `The ${adjective} ${creature}`,
        `The ${adjective} ${part}`,
        `The ${creature}'s ${action}`,
        `The ${action} of the ${adjective} ${creature}`,
        `The ${action} of the ${adjective} ${part}`,
        `The ${adjective} ${action} of ${adjective2} ${action2}`]
};

const getAdjective = () => adjectives.default[roller.getRandomNumber(adjectives.default.length)];
const getAction = () => actions.default[roller.getRandomNumber(actions.default.length)];
const getPart = () => parts.default[roller.getRandomNumber(parts.default.length)];
const getCreature = () => creatures.default[roller.getRandomNumber(creatures.default.length)];

const getRandomMove = () => {
    const formats = template(getAdjective(), getAction(), getPart(), getCreature(), getAdjective(), getAction());
    const format = formats[roller.getRandomNumber(formats.length)];

    return format;
}

export default getRandomMove;