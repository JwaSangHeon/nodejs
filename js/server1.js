const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.write("<h2>Hello Node!</h2>");
    res.write("<h3>Hello Node!</h3>");
    res.write("<h4>Hello Node!</h4>");
    res.write("<h5>Hello Node!</h5>");
    res.end("<p>Hello Server!!!!</p>");
  })
  .listen(8080, () => {
    console.log("8080 포트에서 서버 대기 중입니다.");
  });

// 다른 방식
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h1>안녕 노드</h1>");
  res.write("<h2>안녕 노드</h2>");
  res.write("<h3>안녕 노드</h3>");
  res.write("<h4>안녕 노드</h4>");
  res.write("<h5>안녕 노드</h5>");
  res.end("<p>Hello Server!!!!</p>");
});

server.listen(8081);
server.on("listening", () => {
  console.log("8081 포트에서 서버 대기중입니다.");
});
