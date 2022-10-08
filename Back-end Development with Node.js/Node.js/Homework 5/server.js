const http = require('http');

server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'ContentType': 'text/html' });
        res.write('<h2>WELCOME TO THE INDEX PAGE!</h2>');
    }
    else if (url === '/about') {
        res.writeHead(200, { 'ContentType': 'text/html' });
        res.write('<h2>WELCOME TO THE ABOUT PAGE!</h2>');
    }
    else if (url === '/contact') {
        res.writeHead(200, { 'ContentType': 'text/html' });
        res.write('<h2>WELCOME TO THE CONTACT PAGE!</h2>');
    }
    else {
        res.writeHead(404, { 'ContentType': 'text/html' });
        res.write('<h2>ERROR 404</h2>');
    }

    res.end();
});

const port = 5000

server.listen(port, () => {
    console.log(`Server initialized in port ${port}.`);
});