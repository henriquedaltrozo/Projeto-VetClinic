const express = require("express");
const app = express();
const db = require("./db/connection");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
require("dotenv").config();

const PORT = process.env.DB_PORT;

app.listen(PORT, function () {
  console.log(`O express está rodando na porta ${PORT}`);
});

db.sync()
  .then(() => {
    console.log("Conectou ao banco com sucesso");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar", err);
  });

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);
