const fs = require('fs');
const {Writable} = require("stream");

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');
const consoleFile = new console.Console(out, err);

const log = new Writable({
  write(chunk, encoding, callback) {
    const now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const text = `[INFO]  ${now} - ${chunk.toString()}`;
    const textBuffer = new Buffer(`\x1b[32m${text}\x1b[0m`);
    process.stdout.write(textBuffer);
    consoleFile.log(text.toString().replace('\n', ''));
    callback();
  }
});

const error = new Writable({
  write(chunk, encoding, callback) {
    const now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const text = `[ERROR] ${now} - ${chunk.toString()}`;
    const textBuffer = new Buffer(`\x1b[31m${text}\x1b[0m`);
    process.stdout.write(textBuffer);
    consoleFile.error(text.toString().replace('\n', ''));
    callback();
  }
});

const logger = new console.Console(log, error);

setInterval(() => {
  logger.log('Contador %d', Math.random() * 100);
  logger.error('Error %d', Math.random() * 100);
}, 2000);
