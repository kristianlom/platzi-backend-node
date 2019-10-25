const express = require('express');

const app = express();
const { config } = require('./config/index');

app.get('/', function(req, res) {
  res.send('hello world');
});
app.get('/json', function(req, res) {
  res.send({ hello: 'world' });
});

app.get('/:year', (req, res) => {
  let year = req.params.year;
  res.send(
    { bisiesto:
        ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    });
});

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
