import oneLeader from './oneLeader'

const rules = [
    oneLeader
];

function validateList(list) {
    return rules.map((rule) => rule(list))
        .filter((error) => error !== null);
}

export default validateList;