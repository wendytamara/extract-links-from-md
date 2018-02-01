
const fs = require('fs');

const markdownLinks = require('./src/markdown-links.js');

const strMd = fs.readFileSync('./demo/README.md').toString();

// Observamos en la consola de node.js
console.log('CONTENIDO DEL README: \n\n' + strMd);

let links = markdownLinks(strMd);

// Observamos en la consola de node.js
console.log('EL RESULTADO ES: \n\n' + links);
