import cluster from "cluster";
import { cpus } from "os";
import { startApi } from "./api.js";

if (cluster.isPrimary) {
  console.log(`Iniciando o cluster master ${process.pid}`);
  startApi();

  for (let i = 0; i < cpus().length; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  console.log(`Worker ${process.pid} iniciado`);
  startApi();
}
