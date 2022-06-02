const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso");
})
.catch(err => {
    console.log(`Erro ao conectarse com o banco de dados: ${err.message}`);
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta: ${process.env.PORT}`);
});