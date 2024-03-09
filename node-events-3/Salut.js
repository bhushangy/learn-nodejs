const EventEmitter = require('events');

module.exports = class Salut extends EventEmitter {
  constructor(salut) {
    super();
    this.salut = salut;
  }

  salutation(data) {
    console.log(this.salut);
    this.emit('salut', data);
  }
};
