<p align="center">
	<img src="demo/assets/images/logo.png">
	</img>
</p>
<p align="center">
Módulo de Node.js extrae todos los links encontrados de un archivo markdown y los retorna en un array de objetos.
</p>
<p align="center">
  <a href="https://badge.fury.io/js/sweetalert"><img src="https://badge.fury.io/js/sweetalert.svg" alt="npm version" height="18"></a>
  <a href="https://travis-ci.org/t4t5/sweetalert"><img src="https://travis-ci.org/t4t5/sweetalert.svg" alt="Build status"/><a>
  <a href="https://github.com/t4t5/sweetalert/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/t4t5/sweetalert.svg" />
  </a>
</p>

##  Objetivo

Publicar nuestro primer modulo de Node.js
y que este pueda ser reutilizado en futuros proyectos o por la comunidad en general. Teniendo como referencia el siguiente
ejemplo:

```js
const extractLinksFromMd = require('extract-links-from-md');
const str = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.`;

const links = extractLinksFromMd(str);

console.log(links);
// [
//   { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//   { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//   { href: 'http://foo.com', text: 'foo' },
// ]
```

## Planificación

Como una manera de probar nuestros conocimientos y habilidades, decidimos realizar el **RETO 3: EXTRAER LINKS DE ARCHIVOS MARKDOWN (NODE.JS)**.

Para una planificacion segura y eficaz se utilizo TRELLO,  gestor de tareas que permite el trabajo de forma colaborativa.

Dividimos nuestras tareas por semana:

**SEMANA 1**
- Formar equipo.
- Elegir reto.
- Hacer fork de reto modelo o crear nuevo repo si has propuesto un reto no propuesto por Laboratoria.
- Escribir primera versión del README.md con una descripción general de la librería así como - ejemplos (snippets) de uso y configuración (si fuera necesario).
- Crear issues y milestones que sirvan como hoja de ruta (roadmap)
- Inicializar proyecto con npm init y git init.
- Crear index.html con ejemplo principal de uso.


**SEMANA 2**
- Agregar tests que describan la API de tu librería y los casos de uso esperados.
- I mplementar funcionalidad esencial.
- Hacer code review con tus compañeras e instructorxs.

**SEMANA 3**

- Completar implementación de librería y ejemplo principal (usando la librería).
- Hacer code review con tus compañeras e instructorxs.
- Preparar tu demo/presentación.
- Publicar el ejemplo principal (index.html) en GitHub pages.

Puedes visitar nuestro tablero ingresando https://trello.com/b/dixHJVhT/librer%C3%ADa-js

![planificación](demo/assets/images/TRELLO.png)

***

##  Desarrollo

Nuestra funcion principal **markdownLinks** recibe como parametro un string (en formato markdown) y mediante una expresion regular extrae todos los links Y los retorna en un arreglo de objetos (JSON).

```bash
module.exports = markdownLinks = (markdown) => {
  // Expresion regular que comprueba el formato markdown de los links
  const urlRegex = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;

  let resultUrl = markdown.match(urlRegex); // Retorna un array
  let linksMarkdown = [];
  // Iteración de todo el arreglo resultUrl y busca cada elemento para almacenarlo con push en linksMarkdown
  for (let i = 0; i < resultUrl.length; i++) {
    linksMarkdown.push(
      {href: resultUrl[i + 1],
        text: resultUrl[i] }
    );
    i++;
  }
  return JSON.stringify(linksMarkdown);
};

```

## INSTALACION


```bash
$ npm install markdown-links-nwc
```


##  API

### markdown-links-nwc(markdown)

**REQUISITOS:**

* Crear un archivo index.js
* Archivo markdown a la altura del index.js
* Copiar siguiente codigo en index.js

```bash
const fs = require('fs');
const markdownLinks = require('./node_modules/markdown-links-nwc/src/markdown-links.js');
const strMd = fs.readFileSync('./README.md').toString();
let links = markdownLinks(strMd);
```
* ejecutar node index.js



##  Pruebas Unitarias

Para asegurar las calidad de nuestro proyecto, se realizo pruebas unitarias
(Usamos el framework Mocha y la librería de aserciones Chai)
que comprueban que el código funciona correctamente.

![test](https://j.gifs.com/86Klp3.gif)

## DEMO

Se realizo una demo usando index.js.

![demo](https://j.gifs.com/JqWR0K.gif)



## Autores

- **Nelida Quispe** - [@NelidaSh](https://github.com/NelidaSh)
- **Wendy Quispe** - [@wendytamara](https://github.com/wendytamara)
- **Claudia Garibotto** - [@Claudiagari](https://github.com/Claudiagari)

## Licencia

Este proyecto está licenciado bajo la Licencia ISC - ver el archivo [LICENSE](https://www.isc.org) para más detalles.

Copyright &copy; 2018 All Rights Reserved.
