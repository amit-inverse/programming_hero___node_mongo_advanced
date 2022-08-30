const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    const address_url = 'http://localhost/contact?name=Jessi&country=America';

    const parsed_url = url.parse(address_url, true);
    console.log(parsed_url);

    const queryObject = parsed_url.query;
    console.log(queryObject);
});

server.listen(5000);
console.log('Server started...');
