import { spawn } from "child_process";

console.log("Script Iniciado");

const find = spawn("find", [".", "-type", "f"]);
const wc = spawn("wc", ["-l"]);

find.stdout.pipe(wc.stdin);

wc.stdout.on("data", (data) => {
  console.log(`Número de arquivos ${data}`);
});

console.log("Script Finalizado");

// node child_process/spawn.js
