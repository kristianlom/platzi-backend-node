const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
  if (err) {
    return console.error(err);
  }

  console.log(files);

});
