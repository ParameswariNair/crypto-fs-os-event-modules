
// EventEmitter is a class
const EventEmitter = require('events');
//emitter is an object
const emitter = new EventEmitter();

//register a listener
emitter.on('messageLogged',function(){
    console.log('listener called');
});

//emitter methods
//to raise an event
emitter.emit('messageLogged');