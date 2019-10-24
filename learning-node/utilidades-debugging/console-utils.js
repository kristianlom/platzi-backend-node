// console.log("Un %s y un %s", 'perrito', 'gatito');
//
// console.info('hello world');
// console.warn('hello error');
//
// console.assert(4 === '4');
//
// console.trace('hello world');

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo');
