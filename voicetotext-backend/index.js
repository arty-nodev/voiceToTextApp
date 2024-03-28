const express = require("express");
const { SpeechClient } = require("@google-cloud/speech");

const app = express();
const port = 3000;

// Configura el cliente de Google Cloud Speech-to-Text
const speechClient = new SpeechClient();

// Ruta para manejar la transcripción de audio
app.post("/transcribe", async (req, res) => {
  // Aquí implementarías la lógica para manejar la transcripción de audio
});

// Ruta para manejar la solicitud a la ruta raíz
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
