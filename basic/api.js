import http from "http";

const SERVER_PORT = 8000;

http
  .createServer((req, res) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      try {
        const jsonData = JSON.parse(data);
        for (const _number of Array(10_000_000).keys()) {
        }
        res.writeHead(200);
        res.end(`Oi "${jsonData.message}" - Node.js API Simples`);
      } catch (error) {
        res.writeHead(400);
        res.end("Bad Request");
      }
    });
  })
  .listen(SERVER_PORT);

console.log(`API online na porta ${SERVER_PORT}`);

//curl -X POST -H "Content-Type: application/json" -d '{"message": "teste"}' http://localhost:8000
