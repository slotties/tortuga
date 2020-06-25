const https = require('https');
const fs = require('fs');
const path = require('path');

const TARGET_PATH = path.join(__dirname, '../src/data/chars')
const url = process.argv[2];

if (!url) {
    console.error('No URL provided.');
    printUsage();
    process.exit(1);
}

console.log(url);

https.get(url, (response) => {
    let body = '';
    response.on('data', (chunk) => { body += chunk });
    response.on('end', () => {
        const id = extractId(body);
        const name = extractName(body);
        const costs = extractCosts(body);
        const type = guessType(body);

        if (!id || !name) {
            console.error('Could not extract ID or name');
            process.exit(2);
        }

        const mainFaction = id.substring(0, 3);
        const dataJson = {
            "id": id,
            "name": name,
            "factions": [ mainFaction ],
            "costs": costs,
            "type": type,
            "url": url
        };

        const fileName = path.join(TARGET_PATH, id.toLowerCase() + '.json');
        console.log(`Saving to ${fileName}.`);
        fs.writeFile(fileName, JSON.stringify(dataJson, null, 4), () => {
            process.exit(0);
        });
    });    
});

function printUsage() {
    console.log(`Usage: node ${process.argv[1]} [SHOP_URL]`)
}

function extractId(html) {
    const match =  html.match(/<h1>([A-Z]{3}) ([0-9]{3})/);
    if (!match || match.length === 0) {
        return null;
    }

    return match[1] + match[2];
}

function extractName(html) {
    const match =  html.match(/<h1>[A-Z]{3} [0-9]{3} (.*)<\/h1>/);
    if (!match || match.length === 0) {
        return null;
    }

    return match[1];
}

function extractCosts(html) {
    const match =  html.match(/Heuer: ([0-9]+)/);
    if (!match || match.length === 0) {
        return null;
    }

    return parseInt(match[1], 10);
}

function guessType(html) {
    if (html.match(/ist (ein|eine) Spezialist/) || html.match(/sind Spezialist/)) {
        return 'S';
    } else if (html.match(/sind Gefolg/)) {
        return 'G';
    } else if (html.match(/ist (ein|eine) Anführ/)) {
        return 'A';
    } else {
        return null;
    }
}