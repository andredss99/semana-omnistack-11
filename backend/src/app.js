const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Tipos de parâmetros:
 * - Query: parâmetros nomeados enviados na rota após o símbolo "?" (Filtros, paginação)
 * - Route: parâmetros utilizados para identificar recursos (/users/2)
 * - Request body: corpo da requisição; utilizado para criar ou alterar recursos
 */

module.exports = app;