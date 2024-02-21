import { fileURLToPath } from "url";
import { Worker, isMainThread, parentPort } from "worker_threads";

if (isMainThread) {
  const fileName = fileURLToPath(import.meta.url);

  console.log("Thread principal criando um novo worker...");
  const worker = new Worker(fileName);

  worker.on("message", (msg) =>
    console.log("Thread principal recebe a mensagem:", msg)
  );
} else {
  const message = "Hello world!";
  console.log(
    "Worker thread enviando mensagem para a thread principal:",
    message
  );
  parentPort.postMessage(message);
}




