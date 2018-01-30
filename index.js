const fs = require('fs');

const markdownLinks = require('./src/markdown-links.js');

const strMd = fs.readFileSync('public/README.md').toString();

let links = markdownLinks(strMd);

console.log(links);
