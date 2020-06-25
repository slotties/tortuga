const fs = require('fs');
const path = require('path');


const TARGET_FILE = path.join(__dirname, '../src/data/characters_v1.json');
let template = {
    "schemaVersion": 1,
    "chars": []
}

const charsPath = path.join(__dirname, '../src/data/chars')
fs.readdir(charsPath, (err, files) => {
    if (err) {
        console.error(err);
        process.exit(1);
        return;
    }

    const characters = files.map((file) => {
        return JSON.parse(fs.readFileSync(path.join(charsPath, file), { encoding: 'utf-8' }));
    })

    template.chars = characters;

    fs.writeFileSync(TARGET_FILE, JSON.stringify(template, null, 4));
});