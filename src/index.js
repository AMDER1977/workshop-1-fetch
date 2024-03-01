/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const url = "https://platzi-avo.vercel.app/api/avo";
//**Web Api Fetch */
//* conectarnos al servidor
window
  .fetch(url)
  .then((response) => response.json()) //* procesar la respuesta y convertirla en JSON

  .then((responseJson) => {
    //* obtener Json -> Data -> Renderizar info en el Browser
    responseJson.data.forEach((item) => {
      //crear imagen, titulo y precio
      const image = document.createElement("img");
      document.body.appendChild(image);

      const title = document.createElement("h2");
      document.body.appendChild(title);

      const price = document.createElement("span");
      document.body.appendChild(price);
    });
  });
