const http = require("http");
let countMain = 0;
let countAbout = 0;
let countPageNotFound = 0;
const server = http.createServer((request, response) => {
  console.log("Запрос получен");

  switch (request.url) {
    case "/":
      console.log(`Количество запросов на главной странице ${++countMain}`);
      response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      response.end(`<h1>Главная страница</h1>
      <a href="http://127.0.0.1:${port}/about">Ссылка на About</a>`);
      break;

    case "/about":
      console.log(`Количество запросов на странице About ${++countAbout}`);
      response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      response.end(`<h1>About</h1>
      <a href="http://127.0.0.1:${port}">Ссылка на Главную</a>`);
      break;

    default:
      console.log(`Количество запросов несуществующих страниц ${++countPageNotFound}`);
      response.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
      response.end("<h1>404 Page not found</h1>");
      break;
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
