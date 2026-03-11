const fs = require('fs');
let c = fs.readFileSync('src/app/globals.css', 'utf-8');

// Find all matches of dark:
const matches = [...c.matchAll(/dark:[^\s;\}]*/g)];
console.log('Valid dark usages found:', matches.length);

const invalidMatches = [...c.matchAll(/dark:\s+[^\s;\}]*/g)];
console.log('INVALID dark usages found:', invalidMatches.length);
if (invalidMatches.length > 0) {
    console.log('Examples:', invalidMatches.slice(0, 5).map(m => m[0]));
}

c = c.replace(/(dark|hover|focus|active):\s+/g, '$1:');
fs.writeFileSync('src/app/globals.css', c, 'utf-8');
console.log('Fixed invalid spaces.');
