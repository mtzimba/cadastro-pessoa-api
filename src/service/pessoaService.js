const { PessoaRepository } = require("../infra/pessoaRepository");

class PessoaService {
  constructor() {
    this.pessoaRepository = new PessoaRepository();
  }

  async incluir(pessoa) {
    return await this.pessoaRepository.incluir(pessoa);
  }

  async listar() {
    return await this.pessoaRepository.listar();
  }

  async excluir(id) {
    return await this.pessoaRepository.excluir(id);
  }

  async editar(id, pesssoaParaAtualizar) {
    return await this.pessoaRepository.editar(id, pesssoaParaAtualizar);
  }
  
  async buscar(id) {
    return await this.pessoaRepository.buscar(id,);
  }
}

module.exports = { PessoaService };
