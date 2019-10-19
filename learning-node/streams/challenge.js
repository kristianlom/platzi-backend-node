const {Transform} = require('stream');

const transformCamelCase = (textInput) => {
  let words = textInput.split(' ');
  return words.map((item) =>
    item.charAt(0).toUpperCase().concat(item.replace(item.charAt(0), ''))
  ).join(' ');
};

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    let camelCase = transformCamelCase(chunk.toString().toLowerCase());
    this.push(camelCase);
    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);
