/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const url = "https://platzi-avo.vercel.app/api/avo";
//**Web Api Fetch */
//* conectarnos al servidor
window.fetch(url).then((response) => response.json()); //* procesar la respuesta y convertirla en JSON

//* obtener Json -> Data -> Renderizar info en el Browser
