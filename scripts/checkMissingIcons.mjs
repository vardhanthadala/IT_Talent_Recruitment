import fs from 'fs';

// 1. Read what-we-do.ts to extract all technologies
const content = fs.readFileSync('src/data/what-we-do.ts', 'utf8');
const techRegex = /technologies:\s*\[([\s\S]*?)\]/g;
const uniqueTechs = new Set();
let match;
while ((match = techRegex.exec(content)) !== null) {
    const extracted = match[1].match(/"([^"]+)"/g);
    if (extracted) {
        extracted.forEach(t => uniqueTechs.add(t.replace(/"/g, '')));
    }
}
const allTechs = Array.from(uniqueTechs);

// 2. Exact match keys from TECH_ICON_MAP
const mapKeys = [
  'AWS', 'Microsoft Azure', 'Google Cloud', 'Kubernetes', 'Linux', 'Linux (RHEL/Ubuntu)', 
  'Docker', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI', 'React', 'Next.js', 'React Native', 
  'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'MERN Stack', 'MEAN Stack', 'Flutter',
  'Node.js', 'Python', 'Java', 'Go', 'Ruby on Rails', 'Django', 'Spring Boot', 'GraphQL',
  'Swift', 'Kotlin', 'Objective-C', 'PostgreSQL', 'MongoDB', 'SQL', 'TensorFlow', 'PyTorch', 
  'Datadog', 'Figma', 'Framer', 'Sketch', 'InVision', 'Adobe XD', 'Illustrator', 'Jira', 
  'Selenium', 'Cypress', 'TestRail', 'Appium', 'JUnit', 'Postman', 'JMeter', 'Gatling', 
  'k6', 'Playwright', 'TestNG', 'Bugzilla', 'BrowserStack', 'LoadRunner'
];

const missing = [];

allTechs.forEach(techName => {
    const t = techName.toLowerCase();
    let found = false;

    // Check aliases (simulating getTechIconData)
    if (t === 'go' || t === 'golang' || t === 'k6') found = true;
    else if (
        t.includes('next') || t.includes('graph') || t.includes('flutter') || 
        t.includes('ruby') || t.includes('rails') || t.includes('framer') || 
        t.includes('sketch') || t.includes('invision') || t.includes('xd') || 
        t.includes('adobe xd') || t.includes('illustrator') || t.includes('objective-c') || 
        t.includes('objective c') || t.includes('playwright') || t.includes('appium') || 
        t.includes('junit') || t.includes('testng') || t.includes('postman') || 
        t.includes('bugzilla') || t.includes('browserstack') || t.includes('browser stack') || 
        t.includes('jmeter') || t.includes('gatling') || t.includes('loadrunner') || 
        t.includes('load runner') || t.includes('node') || t.includes('react') || 
        t.includes('vue') || t.includes('angular') || t.includes('postgres') || 
        t.includes('sql') || t.includes('mongo') || t.includes('azure') || 
        t.includes('aws') || t.includes('amazon') || t.includes('gcp') || 
        t.includes('google') || t.includes('k8s') || t.includes('kube') || 
        t.includes('linux') || t.includes('ubuntu') || t.includes('rhel') || 
        t.includes('spring') || t.includes('mac') || t.includes('ios') || 
        t.includes('apple') || t.includes('android') || t.includes('git') || 
        t.includes('testrail') || t.includes('zephyr') || mapKeys.includes(techName)
    ) {
        found = true;
    } else {
        // Substring fuzzy match
        for (const key of mapKeys) {
            if (t.includes(key.toLowerCase())) {
                found = true;
                break;
            }
        }
    }

    if (!found) {
        missing.push(techName);
    }
});

console.log('Missing icons for:', missing);
