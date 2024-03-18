const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

// Poll phase of the event loop has not yet started here to detemine the order of execution of
// setTimeout and setImmediate

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
  console.log('----------------');

  setTimeout(() => console.log('Timer 2 finished'), 0);
  setTimeout(() => console.log('Timer 3 finished'), 3000);
  setImmediate(() => console.log('Immediate 2 finished'));

  process.nextTick(() => console.log('Process.nextTick'));

  Promise.resolve().then(() =>
    console.log('Promise callback picked up by the event loop')
  );
});

Promise.resolve().then(() => console.log('Promise outside I/O'));

console.log('Hello from the top-level code');
