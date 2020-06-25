import validateList from "./validateList";

function oneLeader(list) {
    const leaders = list.filter((character) => character.type === 'A');

    return leaders.length > 1 ? 'Nur ein Anführer ist erlaubt.' : null;
}

export default oneLeader;