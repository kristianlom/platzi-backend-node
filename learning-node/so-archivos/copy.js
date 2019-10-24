const fs = require('fs');

const src = 'naranja.txt';
const dest = 'limon.txt';

fs.copyFile(src, dest, err => {
  if (err) {
    console.error(err);
  }

  console.log(`${src} fue copiado a ${dest}`);
});
