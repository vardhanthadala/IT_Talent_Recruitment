import fs from 'fs';

let content = fs.readFileSync('src/data/what-we-do.ts', 'utf8');

// Append a standard 2-sentence elaboration to make descriptions 4-7 lines long
const elaboration = " We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment.";

content = content.replace(/(description:\s*"[^"]+)(")/g, (match, p1, p2) => {
    // Check if we already appended it (to prevent double appending if run multiple times)
    if (p1.includes("We leverage industry-leading")) {
        return match;
    }
    return p1 + elaboration + p2;
});

fs.writeFileSync('src/data/what-we-do.ts', content);
console.log('Successfully lengthened all descriptions in what-we-do.ts!');
