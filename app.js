const http = require('http');
const fs = require('fs');

const hostname = '10.200.26.136';
const port = 3000;

let handleRequest = (request, response) => {
    
    
    
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./public/keyboard.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};

http.createServer(handleRequest).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

let getHomePage = (request, response) => {
    
};

//const server = http.createServer((req, res) => {
////    res.statusCode = 200;
////    res.setHeader('Content-Type', 'text/plain');
////    res.end('Hello, World!\n');
//});
//
//server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
//});



//const path = require('path');

//const myPath = path.basename(__filename);