import Fastify from "fastify";

const SERVER_PORT = 8000;

const fastify = Fastify({ logger: false });

fastify.post("/", (request, reply) => {
  return `Oi "${request.body.message}" - Node.js API Simples`;
});

fastify.listen({ port: SERVER_PORT });

console.log(`API online na porta ${SERVER_PORT}`);

//curl -X POST -H "Content-Type: application/json" -d '{"message": "teste"}' http://localhost:8000
