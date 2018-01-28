$(document).ready(function() {

    const btn = $('#btn');
    const container = $('#container');
    //expresion regular que detecta url
    const urlRegex = /(\[(.*?)\])|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;

    btn.on('click', () => {

      let content = document.getElementById('content').value;
      let resultUrl = content.match(urlRegex);
      let linksMarkdown = [];

       for (let i= 0; i < resultUrl.length; i++) {
         linksMarkdown.push(
           {href: resultUrl[i+1], text: resultUrl[i] }
            )

            i++
        }

     console.log(linksMarkdown);
     container.text(JSON.stringify(linksMarkdown));

    })

})
