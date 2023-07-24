const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config");
const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  {
    host: config[env].host,
    dialect: config[env].dialect,
  }
);

const PessoaModel = sequelize.define("pessoa", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataNascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

class PessoaRepository {
  async incluir(novaPessoa) {
    try {
      await sequelize.sync();
      const pessoaSalva = await PessoaModel.create({
        nome: novaPessoa.nome,
        dataNascimento: novaPessoa.dataNascimento,
      });
      return pessoaSalva;
    } catch (error) {
      console.error("Erro ao incluir uma nova pessoa:", error);
      throw error;
    }
  }

  async listar() {
    try {
      await sequelize.sync();
      return await PessoaModel.findAll();
    } catch (error) {
      console.error("Erro ao listar todas as pessoas:", error);
      throw error;
    }
  }

  async excluir(id) {
    try {
      await sequelize.sync();
      const pessoaExcluida = await PessoaModel.destroy({
        where: {
          id: id,
        },
      });
      return pessoaExcluida > 0;
    } catch (error) {
      console.error("Erro ao excluir pessoa:", error);
      throw error;
    }
  }

  async editar(id, pesssoaParaAtualizar) {
    try {
      await sequelize.sync();

      const [numRowsUpdated, updatedRows] = await PessoaModel.update(
        {
          nome: pesssoaParaAtualizar.nome,
          dataNascimento: pesssoaParaAtualizar.dataNascimento,
        },
        {
          where: {
            id: id,
          },
          returning: true,
        }
      );

      if (numRowsUpdated === 0) {
        // Nenhuma pessoa foi atualizada (ID não encontrado)
        return null;
      }

      // Retorna a pessoa atualizada
      return updatedRows[0];
    } catch (error) {
      console.error("Erro ao editar pessoa:", error);
      throw error;
    }
  }
}

module.exports = { PessoaRepository };
