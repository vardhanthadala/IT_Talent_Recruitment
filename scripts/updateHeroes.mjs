import fs from 'fs';

let content = fs.readFileSync('src/data/what-we-do.ts', 'utf8');

const mapping = {
  'frontend-developers': '/images/heroes/dev.jpg',
  'backend-engineers': '/images/heroes/dev.jpg',
  'full-stack-developers': '/images/heroes/dev.jpg',
  'mobile-app-devs': '/images/heroes/dev.jpg',
  'ui-ux-designers': '/images/heroes/dev.jpg',
  'automation-engineers': '/images/heroes/dev.jpg',
  'manual-qa-testers': '/images/heroes/dev.jpg',
  'performance-testers': '/images/heroes/dev.jpg',
  'security-analysts': '/images/heroes/security.jpg',
  'sdet-professionals': '/images/heroes/dev.jpg',
  'devops-engineers': '/images/heroes/cloud.jpg',
  'cloud-architects': '/images/heroes/cloud.jpg',
  'system-administrators': '/images/heroes/support.jpg',
  'network-engineers': '/images/heroes/cloud.jpg',
  'it-support-specialists': '/images/heroes/support.jpg',
  'data-scientists': '/images/heroes/data.jpg',
  'machine-learning-engineers': '/images/heroes/ai.png',
  'data-analysts': '/images/heroes/data.jpg',
  'data-engineers': '/images/heroes/data.jpg',
  'bi-developers': '/images/heroes/data.jpg'
};

for (const [id, imgUrl] of Object.entries(mapping)) {
  const regex = new RegExp('id: "' + id + '",[\\s\\S]*?heroImage: "([^"]+)"', 'g');
  content = content.replace(regex, (match, oldImg) => {
    return match.replace('heroImage: "' + oldImg + '"', 'heroImage: "' + imgUrl + '"');
  });
}

fs.writeFileSync('src/data/what-we-do.ts', content);
console.log('Updated what-we-do.ts successfully!');
