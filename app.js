const http = require('http');
const fs = require('fs');

const hostname = '10.200.26.136';
const port = 3000;

function getKeyboard(response) {
    fs.readFile('./public/keyboard.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

let handleRequest = (request, response) => {
    
    console.log(request.url);
    
    getKeyboard(response);
    
//    switch (request.method) {
//        case "GET":
//            if (request.url === "/") {
//                response.writeHead(200, { "Content-Type": "text/plain"});
//                response.write("Hello there at /");
//            } else if (request.url === "/k") {
//                response.writeHead(200, {'Content-Type': 'text/html'});
//                fs.readFile('./public/keyboard.html', null, function (error, data) {
//                    if (error) {
//                        response.writeHead(404);
//                        response.write('Whoops! File not Found!');
//                    } else {
//                        response.write(data);
//                    }
////                    response.end();
//                });
//            }
//            break;
//        case "POST":
//            break;
//        default:
////            response.end();
//            break;
//    }
//    response.end();
    
//    response.writeHead(200, {
//        'Content-Type': 'text/html'
//    });
//    fs.readFile('./public/keyboard.html', null, function (error, data) {
//        if (error) {
//            response.writeHead(404);
//            response.write('Whoops! File not found!');
//        } else {
//            response.write(data);
//        }
//        response.end();
//    });
};

const PORT = process.env.PORT || 3000;
http.createServer(handleRequest).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//http.createServer(handleRequest).listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
//});

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