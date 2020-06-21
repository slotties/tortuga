import Chars from './characters_v1.json';

function characterById(id) {
    return Chars.chars.find((item) => {
        return item.id === id
    })
}

function charactersByFaction(faction) {
    return Chars.chars.filter((item) => {
        return item.factions.includes(faction)
    })
}

export {
    characterById,
    charactersByFaction
}