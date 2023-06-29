const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('person', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
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
