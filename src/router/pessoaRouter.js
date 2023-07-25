const express = require("express");
const { PessoaController } = require("../controller/pessoaController");

const router = express.Router();
const pessoaController = new PessoaController();

router.get("/api/pessoas", pessoaController.listar);

router.post("/api/pessoas", pessoaController.incluir);

router.delete("/api/pessoas/:id", pessoaController.excluir);

router.put("/api/pessoas/:id", pessoaController.editar);

router.get("/api/pessoas/:id", pessoaController.buscarPorId);

module.exports = router;