const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url == '/') {
        // fs.readFile('2_9_data.txt', (err, data) => {
        //     if (err) {
        //         res.write('Failed to read data...');
        //         res.end();
        //     } else {
        //         res.write(data);
        //         res.end();
        //     }
        // });

        // const data = fs.readFileSync('2_9_data.txt');
        // res.write(data);
        // res.end();

        fs.writeFile('2_9_data.txt', 'Hello world!', (err) => {
            if (err) {
                res.write('Data failed to write.');
                res.end();
            } else {
                res.write('Data write successful.');
                res.end();
            }
        });
    }
});

server.listen(5000);
console.log('Server started...');
