const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist, { recursive: true });
}

const filesToCopy = [
  'index.html',
  'style.css',
  'app.js',
  'privacidade.html',
  'termos.html',
  'favicon.svg',
  'robots.txt',
  '_headers',
];

filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(dist, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});

const fontsSrc = path.join(__dirname, 'fonts');
const fontsDest = path.join(dist, 'fonts');
if (fs.existsSync(fontsSrc)) {
  fs.cpSync(fontsSrc, fontsDest, { recursive: true });
}

const imgSrc = path.join(__dirname, 'img');
const imgDest = path.join(dist, 'img');
if (fs.existsSync(imgSrc)) {
  fs.cpSync(imgSrc, imgDest, { recursive: true });
}

console.log('Build concluido em dist/');
