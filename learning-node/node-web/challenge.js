const http = require('http');
const server = http.createServer();

const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
server.on('request', (req, res) => {

  if (req.method === 'POST' && req.url === '/birth') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      let arrayDate = body.split('/');

      let day = 0;
      let month = 1;
      let year = 2;

      let bth = new Date(arrayDate[year] + 0, arrayDate[month] - 1, arrayDate[day] + 0);

      body = '';
      body = days [bth.getDay()];
    })
      .on('end', () => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(body);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(8003);
console.log('Servidor en la url http://localhost:8003');
