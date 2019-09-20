const EventEmitter = require('events');

//Create Class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', () => console.log('event fired!'))

//init event
myEmitter.emit('event');