
const fs = require('fs');

const markdownLinks = require('./src/markdown-links.js');

const strMd = fs.readFileSync('./demo/README.md').toString();

console.log('\n');
console.log('\x1b[36m%s\x1b[0m', 'CONTENIDO DEL README:');
console.log('\n');
console.log(strMd);
// console.log('CONTENIDO DEL README: \n\n' + strMd);

let links = markdownLinks(strMd);

// Observamos en la consola de node.js
// console.log('EL RESULTADO ES: \n\n' + links);
