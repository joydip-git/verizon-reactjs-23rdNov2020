var fs = require("fs");
var data = fs.readFileSync("productdata.json");

var http = require("http");

http.createServer(function (request, response) {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-with,Content-Type');

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end(data);

}).listen(8082);

console.log('server running at http://127.0.0.1:8082');