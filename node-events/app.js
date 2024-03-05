const emitter = require('./emitter');

emitter.on('greet', () => {
  console.log('Hello 1');
});



emitter.on('greet', () => {
  console.log('Hello again!!');
});

emitter.emit('greet');
