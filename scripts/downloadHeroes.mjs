import fs from 'fs';
import path from 'path';
import https from 'https';

const urls = {
  cloud: 'https://www.apexsystems.com/solution/cloud-and-infrastructure',
  dev: 'https://www.apexsystems.com/solution/application-engineering-and-services',
  ai: 'https://www.apexsystems.com/solution/artificial-intelligence',
  data: 'https://www.apexsystems.com/solution/data',
  support: 'https://www.apexsystems.com/solution/managed-support',
  security: 'https://www.apexsystems.com/solution/security-and-risk'
};

const outputDir = path.resolve('./public/images/heroes');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(dest))
           .on('error', reject)
           .once('close', () => resolve(dest));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const [key, url] of Object.entries(urls)) {
    try {
      console.log(`Fetching ${url}...`);
      const res = await fetch(url);
      const html = await res.text();
      
      const match = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
      if (match && match[1]) {
        let imgUrl = match[1];
        if (imgUrl.startsWith('//')) {
            imgUrl = 'https:' + imgUrl;
        } else if (imgUrl.startsWith('/')) {
            imgUrl = 'https://www.apexsystems.com' + imgUrl;
        }

        const ext = path.extname(new URL(imgUrl).pathname) || '.jpg';
        const dest = path.join(outputDir, `${key}${ext}`);
        
        console.log(`Downloading ${imgUrl} to ${dest}...`);
        await downloadImage(imgUrl, dest);
        console.log(`Success: /images/heroes/${key}${ext}`);
      } else {
        console.log(`Could not find og:image for ${key}`);
      }
    } catch (e) {
      console.error(`Error processing ${key}:`, e);
    }
  }
}

run();
