// Get fs.js that deals with file system. It has wrappers for C++ code,
// that deals with the file system of the operating system.
// You know there are these bindings between node and c++
const fs = require('fs');

// const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// console.log(greet);

// const greet2 = fs.readFile(
//   __dirname + '/greet.txt',
//   'utf-8',
//   // Invoke this function if there was an error parsing the file and pass the err object.
//   // If no error, then invoke this function with err as null and the data as file data.
//   function (err, data) {
//     console.log(data);
//     // If no encoding is specified, you will get back a buffer. i.e number representation of each character in your file.
//     // If you provide utf8 encoding, then binary is converted to corresponding character string.
//   }
// );

// console.log('Done');

// Using streams

// const readable = fs.createReadStream(__dirname + '/greet.txt', {
//   encoding: 'utf8',
//   // So file size of 61KB, is read in two chunks.
//   // Each of size 32KB. 32 * 1024 bytes is 32KB.
//   // Default size is 64KB.
//   highWaterMark: 32 * 1024,
// });

// const writable = fs.createWriteStream(__dirname + '/greetOutput.txt');

// readable.on('data', (chunk) => {
//   console.log(chunk, '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
//   writable.write(chunk);
// });

// Using pipes

const readable = fs.createReadStream(__dirname + '/greet.txt');

const writable = fs.createWriteStream(__dirname + '/greetOutput.txt');

// Piping from readable stream to writable stream.
// The pipe function returns the destination stream to which it wrote to.
// So if you want to again read from that returned stream, that stream has to be duplex/transform stream.
// Remember how pipe works. It just listens to the on event emitted by
readable.pipe(writable);

// Allows us to implement a gzip file. gzip is a compressed file format.
// It is not the same as a .zip file. It has a different format that requires a specific tool to be uncompressed.
const zlib = require('zlib');

// The createGzip method will return back a transform stream.
const gzip = zlib.createGzip();

const compressed = fs.createWriteStream(__dirname + '/greetOutput.txt.gz');

// Reading chunks of data from the readable stream and sending the chunk to the gzip transform stream.
// The transform stream will compress that chunk and send it to another stream via the pipe attached.
// Since it is a transform stream, we can both write to it and read from it.
readable.pipe(gzip).pipe(compressed);
