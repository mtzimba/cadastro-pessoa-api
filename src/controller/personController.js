const { PersonService } = require('../service/personService');

class PersonController {

  constructor() {
    this.personService = new PersonService();
  }

  create = async (req, res) => {
    const { name, dateOfBirth } = req.body;
    try {
      const person = await this.personService.savePerson(name, dateOfBirth);
      res.status(201).json(person);
    } catch (error) {
      console.error('Erro ao salvar a pessoa:', error);
      res.status(500).json({ error: 'Erro ao salvar a pessoa' });
    }
  };
}

module.exports = { PersonController };