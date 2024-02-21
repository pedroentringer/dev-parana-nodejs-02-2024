import cluster from "cluster";
import Fastify from "fastify";
import { cpus } from "os";

const SERVER_PORT = 8000;

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) =>
    console.log(`worker ${worker.process.pid} died`)
  );
} else {
  const processIdentifier = `${cluster.isPrimary ? "master" : "child"} id ${
    cluster.worker.process.pid
  }`;

  const fastify = Fastify({ logger: false });

  fastify.post("/", (request, reply) => {
    return `Oi "${request.body.message}" - Node.js ${processIdentifier}!`;
  });

  fastify.listen({ port: SERVER_PORT });

  console.log(`API online na porta ${SERVER_PORT} - ${processIdentifier}`);
}
