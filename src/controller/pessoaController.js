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
}

  excluir = async (req, res) => {
    try {
      const pessoaExiste = await this.pessoaService.buscarPorId(id);
      res.status(204).json('Exclusão realizada com sucesso');
      const { id } = req.params;
  try {
    const pessoaExiste = await this.pessoaService.buscarPorId(id);
  }
    if (!pessoaExiste) {
      res.status(404).json({ error: 'Não existe o registro informado' });
    }
    
    } catch (error) {
      console.error('Erro na exclusão:', error);
    res.status(500).json({ error: 'Erro na exclusão' });
  }
},



module.exports = { PessoaController };
  

