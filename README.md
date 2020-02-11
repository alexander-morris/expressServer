# Server

This is a node.js server using NPM Express routing with Sequelize for Database access.

To run the server locally, open the directory in a terminal and run `npm i` and `node app.js`.

** To run the server with automatic restarts when files are changed, try `nodemon app.js`

Once the server is running, you can visit localhost:8887/heartbeat in a browser to see a 

## Server Architecture

### Core Server

App.js contains most of the functionality of the server, but is not important for normal development.

### Adding Routes
Routes.js contains all information about how to add a route to the server. 

The server heartbeat endpoint is added like so: 
```
var heartbeat = require('./controllers/heartbeat.js');
app.get('/', heartbeat.helloWorld);
```

This imports the controller functions from ./controllers/heartbeat.js and sets a GET endpoint at 'localhost:8887/' which will call the function called 'helloWorld' within the file heartbeat.js.

### Adding controller functions
Controller functions can be added in the controllers/ directory by adding a new 'module.exports' entry. The controller for heartbeat.js is shown below:

```
// Function Declarations
module.exports = {
	helloWorld : function helloWorld (req, res) {
		return res.status(200).send('<head><script type="text/javascript">//var i = 0; while ( true ) { setInterval(function(){return console.log(i);i++}, 1000) }</script></head><body style="background:black"><img src="https://media.giphy.com/media/OMD2Ca7SN87gQ/giphy.gif" style="width:100vw;height:auto"></img></body>')
	},
}
```
This function, as an example, uses the express.js built-in parameters `req` and `res` (request and result) to return a value when the endpoint receives a GET call.
