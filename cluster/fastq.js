import fastq from "fastq";

const worker = async (messageToSend, callback) => {
  try {
    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messageToSend,
      }),
    });

    if (!response.ok) {
      throw new Error("Falha ao obter resposta da API");
    }

    const data = await response.text();
    callback(null, data);
  } catch (error) {
    callback(error, null);
  }
};

const queue = fastq(worker, 1_000);

const messages = Array.from({ length: 10_000 }, (_, i) => `Message ${i}`);

for (const message of messages) {
  console.log(`Enfileirando mensagem: ${message}`);
  queue.push(message, (error, data) => {
    if (error) {
      console.error(`Erro em ${message}`, error.message);
    } else {
      console.log(`Resposta para ${message}:`, data);
    }
  });
}
