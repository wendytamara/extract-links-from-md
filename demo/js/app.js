markdownLinks = markdown => {
  const urlRegex = /\[(.*?)\]\((.*?|(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-]))\)/gi; // (global search)busqueda global, (ignore case)la expresión completa no distinge entre mayúsculas y minúsculas(case-insensitive)

  let resultUrl = urlRegex.exec(markdown); // Retorna un array
  console.log(resultUrl);
  let linksMarkdown = [];
  
  do {
    for (let i = 1; i < (resultUrl.length) / 2; i++) {
      linksMarkdown.push(
        {href: resultUrl[i + 1],
          text: resultUrl[i] }
      );
      i++;
    };
  } while ((resultUrl = urlRegex.exec(markdown)) !== null);
  console.log(linksMarkdown);
  return JSON.stringify(linksMarkdown);
};
