console.time("timer");
console.log("Script Iniciado");

setTimeout(() => {
  console.log("Executando depois de 5s");
  console.timeEnd("timer");
}, 5_000);

console.log("Script Finalizado");

// node child_process/timer.js
