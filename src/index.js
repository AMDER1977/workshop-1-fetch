/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = "https://platzi-avo.vercel.app";

//**Web Api Fetch */
//* conectarnos al servidor
window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json()) //* procesar la respuesta y convertirla en JSON

  .then((responseJson) => {
    const todosLosItems = [];
    //* obtener Json -> Data -> Renderizar info en el Browser
    responseJson.data.forEach((item) => {
      //crear imagen, titulo y precio
      const image = document.createElement("img");
      image.src = `${baseUrl}${item.image}`;

      const title = document.createElement("h2");
      title.textContent = item.name;

      const price = document.createElement("div");
      price.textContent = item.price;

      const container = document.createElement("div");
      container.append(image, title, price);

      todosLosItems.push(container);
    });
    document.body.append(...todosLosItems);
  });
