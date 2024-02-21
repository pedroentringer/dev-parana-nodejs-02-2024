import { exec } from "child_process";

console.log("Script Iniciado");

exec("find . -type f", (err, stdout, stderr) => {
  if (err) {
    console.error(`erro exec: ${err}`);
    return;
  }

  console.log(stdout);
});

console.log("Script Finalizado");

// node child_process/exec.js
