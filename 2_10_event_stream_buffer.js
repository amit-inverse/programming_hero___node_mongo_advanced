// const events = require('events');
// const eventEmitter = new events.EventEmitter();

// // Creating an event
// const myEvent = () => {
//     console.log('ting ting...');
// };

// // Assign handler into an event
// eventEmitter.on('ting', myEvent).myEvent;

// eventEmitter.emit('ting');

const fs = require('fs');

const readstream = fs.createReadStream('./2_10_data.txt');

readstream.on('data', (chunk) => {
    console.log('..........');
    console.log(chunk);
});

readstream.on('open', () => {
    console.log('Stream is open...');
});

setTimeout(() => {
    readstream.pause();
    console.log('Straming is paused.');
}, 5);

setTimeout(() => {
    readstream.resume();
    console.log('Straming is resumed.');
}, 5000);
