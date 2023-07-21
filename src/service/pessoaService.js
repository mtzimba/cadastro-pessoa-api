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

  async editar(id) {
    return await this.pessoaRepository.editar(id);
  }
}

module.exports = { PessoaService };
