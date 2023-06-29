const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, {
  host: config[env].host,
  dialect: config[env].dialect,
});

const PersonModel = sequelize.define('person', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

class PersonRepository {
  async save(person) {
    try {
      await sequelize.sync();
      const createdPerson = await PersonModel.create({
        name: person.name,
        dateOfBirth: person.dateOfBirth,
      });
      return createdPerson;
    } catch (error) {
      console.error('Erro ao salvar a pessoa:', error);
      throw error;
    }
  }
}

module.exports = { PersonRepository };
