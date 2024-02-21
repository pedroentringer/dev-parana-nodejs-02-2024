import { spawn } from "child_process";

console.log("Script Iniciado");

const child = spawn("node", ["timer.js"], {
  detached: true,
  stdio: "ignore",
});

child.unref();

console.log("Script Finalizado");

// node child_process/background.js && ps -ef | grep timer.js
