const Emitter = require('events');
const Utils = require('util');

function Greet() {
  this.greeting = 'Hello, Ola!!';
}

function Salut() {
  this.salut = 'Salut';
}

Salut.prototype.salutation = function (data) {
  console.log(this.salut);
  this.emit('salut', data);
};
Utils.inherits(Salut, Emitter);

const salut = new Salut();

salut.on('salut', (data) => console.log('Someone saluted', data));

salut.salutation('You');

console.log(salut.eventNames());

Greet.prototype.greet = function (data) {
  console.log(this.greeting);
  this.emit('greet', data);
};
Utils.inherits(Greet, Emitter);

const greeting = new Greet();

greeting.on('greet', (data) => console.log('Someone greeted', data));

greeting.greet('You');

console.log(greeting.eventNames());

// When you invoke on method on greet object, the event type 'greet' is added to the greet object and it is 
// specific to that object alone. See implementation of on method. It uses this.events = ....
// So every time you create a new instance of greet, you get a new this.events. So an event registered on one object 
// can no way be shared with other objects of the same type.