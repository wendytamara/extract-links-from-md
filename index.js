
// con este modulo se puede leer un archivo de texto

var fs = require('fs');

fs.readFile(__dirname + '/README.md', function(error, content){
    var contentReadme = content.toString();

    // Expresion regular que comprueba el formato markdown de los links
    const urlRegex = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi; // (ignore case)la expresión completa no distinge entre mayúsculas y minúsculas(case-insensitive), (global search)busqueda global.

      let resultUrl = contentReadme.match(urlRegex); // Retorna un array
      let linksMarkdown = [];
      // Iteración de todo el arreglo resultUrl y busca cada elemento para almacenarlo con push en linksMarkdown
      for (let i = 0; i < resultUrl.length; i++) {
        linksMarkdown.push(
          {href: resultUrl[i + 1],
            text: resultUrl[i] }
        );
        i++;
      }
    //   console.log(linksMarkdown);
      console.log(JSON.stringify(linksMarkdown));



})
