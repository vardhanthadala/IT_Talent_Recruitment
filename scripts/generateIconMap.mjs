import fs from 'fs';
import * as si from 'react-icons/si';
import * as fa from 'react-icons/fa';
import * as fi from 'react-icons/fi';

// Read what-we-do.ts to extract technologies manually since it's ts
const content = fs.readFileSync('src/data/what-we-do.ts', 'utf8');
const techRegex = /technologies:\s*\[([\s\S]*?)\]/g;
const uniqueTechs = new Set();

let match;
while ((match = techRegex.exec(content)) !== null) {
    const techArrayStr = match[1];
    const extracted = techArrayStr.match(/"([^"]+)"/g);
    if (extracted) {
        extracted.forEach(t => uniqueTechs.add(t.replace(/"/g, '')));
    }
}

const techs = Array.from(uniqueTechs);
console.log(`Found ${techs.length} unique technologies`);

const map = {};
const imports = new Set();
let faImports = new Set();

techs.forEach(tech => {
    const lower = tech.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Custom fallbacks
    if (tech === 'AWS') { map[tech] = 'FaAws'; faImports.add('FaAws'); return; }
    if (tech === 'Microsoft Azure') { map[tech] = 'FaMicrosoft'; faImports.add('FaMicrosoft'); return; }
    
    // Check SI
    const siKey = Object.keys(si).find(k => k.toLowerCase() === `si${lower}` || k.toLowerCase().includes(lower));
    if (siKey) {
        map[tech] = siKey;
        imports.add(siKey);
        return;
    }
    
    // Check FA
    const faKey = Object.keys(fa).find(k => k.toLowerCase() === `fa${lower}` || k.toLowerCase().includes(lower));
    if (faKey) {
        map[tech] = faKey;
        faImports.add(faKey);
        return;
    }
});

console.log("Imports SI: ", Array.from(imports).join(', '));
console.log("Imports FA: ", Array.from(faImports).join(', '));
console.log("Mapping: ", map);
