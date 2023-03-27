//Comsc230 class exercises: Nodejs

// Exercise: Node Web Server based on tutorial: http://nicholasjohnson.com/node/course/exercises/node-server/

// In your local GitHub folder create a new folder called 'Node' to hold your Node projects. 
// Copy and save the code below into a file called 'app.js'
// go tho the command line and navigate to the GitHub/Node directory
// call the server at the command prompt:  node app.js <enter>

var http = require('http');				// require('http') will return an HTTP object

http.createServer(function (request, response) {	// Now we use the http.createServer method to create our webserver
  response.writeHead(200);
  response.write('<h1>Hello Node!!!!</h1>\n');
  response.end();
}).listen(3000);					// The server will listen on localhost port 3000
console.log('Server running at http://localhost:3000');


// Modify the code to listen on a different port
// Modify the program to display a different message
