const express = require("express");
const app = express();
const db = require("./db/connection");
const TutorRoutes = require("./routes/TutorRoutes");
const PetRoutes = require("./routes/PetRoutes");
require("dotenv").config();

const PORT = process.env.DB_PORT || 3000;

app.use(express.json());

db.sync()
  .then(() => {
    console.log("Conectou ao banco com sucesso");

    app.use("/", TutorRoutes);
    app.use("/", PetRoutes);

    app.use((req, res) => {
      res.status(404).send("Rota não encontrada");
    });

    app.listen(PORT, function () {
      console.log(`O express está rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar", err);
  });
