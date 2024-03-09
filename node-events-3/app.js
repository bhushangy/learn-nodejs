const Greet = require('./Greet');
const Salut = require('./Salut');

const salut = new Salut('Ola');
// Remember, a class is nothing but a syntactic sugar for a fucntion constructor

salut.on('salut', (data) => console.log('Someone saluted', data));

salut.salutation('You');

console.log(salut.eventNames());

const greeting = new Greet('Hello');
const greeting2 = new Greet('Hello 2');

greeting.on('greet', (data) => console.log('Someone greeted', data));
greeting2.on('greet', (data) => console.log('Someone greeted twice', data));

greeting.greet('You');
console.log(greeting.eventNames());

greeting2.greet('You');
console.log(greeting2.eventNames());

// When you invoke on method on greet object, the event type 'greet' is added to the greet object and it is
// specific to that object alone. See implementation of on method. It uses this.events = ....
// So every time you create a new instance of greet, you get a new this.events. So an event registered on one object
// can no way be shared with other objects of the same type.
