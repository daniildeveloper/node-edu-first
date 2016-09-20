var http = require('http');

http.createServer(
    function (request, response) {
        //send the http header
        response.writeHead(200, { 'Content-type': 'text/plain' });

        //send the reponse body as 'hello world'
        response.end('Hello world!\n');
    }
).listen(8081);

//console log the message
console.log('Sever is running at http://localhost:8081/');