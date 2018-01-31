const fs = require('fs');

const markdownLinks = require('./src/markdown-links.js');

const strMd = fs.readFileSync('demo/README.md').toString();
console.log(strMd); // Observamos en la consola de node.js
let links = markdownLinks(strMd);
console.log(links); // Observamos en la consola de node.js
