const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
  res.end(`<h1>We can't seem to find the page you are looking for </h1>
<a href="/">BACK HOME</a>`);
});
server.listen(3001);
