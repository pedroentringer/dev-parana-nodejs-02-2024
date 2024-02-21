import cluster from "cluster";
import { cpus } from "os";
import http from "http";

const numCPUs = cpus().length;
const SERVER_PORT = 8000;

if (cluster.isPrimary) {
  console.log("Processo master iniciado");
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const processIdentifier = `${cluster.isPrimary ? "master" : "child"} id ${
    cluster.worker.process.pid
  }`;

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
          res.end(`Oi "${jsonData.message}" - Node.js ${processIdentifier}!`);
        } catch (error) {
          res.writeHead(400);
          res.end("Bad Request");
        }
      });
    })
    .listen(SERVER_PORT);

  console.log(`API online na porta ${SERVER_PORT} - ${processIdentifier}`);
}
