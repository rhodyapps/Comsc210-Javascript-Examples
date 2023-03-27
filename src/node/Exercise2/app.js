/* More complex server that will render html pages

Create a subfolder called 'AppPages' in your Node project folder


*/



var http = require('http');
var fs = require('fs');
//2.
var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/create") {
        fs.readFile("AppPages/page1.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Node Server Example</h1><br /><br /> Notice how we can pass HTML markup to JS functions' + req.url);
        resp.end();
    }
});
//5.
server.listen(3000);
 
console.log('Server Started listening on 3000');
