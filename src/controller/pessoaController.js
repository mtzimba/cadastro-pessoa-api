const { Pessoa } = require('../domain/pessoa');
const { PessoaService } = require('../service/pessoaService');

class PessoaController {

  constructor() {
    this.pessoaService = new PessoaService();
  }

  incluir = async (req, res) => {
    const { nome, dataNascimento } = req.body;
    try {
      const novaPessoa = new Pessoa(nome, dataNascimento);
      const pessoaSalva = await this.pessoaService.incluir(novaPessoa);
      res.status(201).json(pessoaSalva);
    } catch (error) {
      console.error('Erro ao incluir uma nova pessoa:', error);
      res.status(500).json({ error: 'Erro ao incluir uma nova pessoa' });
    }
  };

  listar = async (req, res) => {
    try {
      const listaDePessoas = await this.pessoaService.listar();
      res.status(200).json(listaDePessoas);
    } catch (error) {
      console.error('Erro ao listar todas as pessoas:', error);
      res.status(500).json({ error: 'Erro ao listar todas as pessoas' });
    }
  };

   excluir = async (req, res) => {
    const id = req.params.id;
    try {
      const pessoaExcluida = await this.pessoaService.excluir(id);
      if (pessoaExcluida) {
      
        res.sendStatus(204);
      } else {
       
        res.status(404).send('Não existe o registro informado');
      }
    } catch (error) {
      console.error('Erro ao excluir a pessoa:', error);
      res.status(500).send('Erro na exclusão');
    }
  };
  }
module.exports = { PessoaController };





