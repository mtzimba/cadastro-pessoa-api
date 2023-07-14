const express = require('express');
const router = require('./router/pessoaRouter');

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});