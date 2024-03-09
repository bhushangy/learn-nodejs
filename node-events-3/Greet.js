const EventEmitter = require('events');

module.exports = class Greet extends EventEmitter {
  constructor(greeting) {
    super();
    this.greeting = greeting;
  }

  greet(data) {
    console.log(this.greeting);
    this.emit('greet', data);
  }
};
