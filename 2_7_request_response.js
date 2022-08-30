const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write('<p>Amit Kumar Das</p>');
        // res.end();
        res.end(JSON.stringify({ name: 'Amit Kumar Das' }));
    } else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<p>Contact</p>');
        res.end();
    }
});

server.listen(5000);
console.log('Server started...');
