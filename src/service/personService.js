const { Person } = require('../domain/person');
const { PersonRepository } = require('../infra/personRepository');

class PersonService {
  constructor() {
    this.personRepository = new PersonRepository();
  }

  async savePerson(name, dateOfBirth) {
    const person = new Person(name, dateOfBirth);
    const savedPerson = await this.personRepository.save(person);
    return savedPerson;
  }
}

module.exports = { PersonService };