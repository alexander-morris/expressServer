module.exports = function(app){

  var heartbeat = require('./controllers/heartbeat.js');
  app.get('/', heartbeat.helloWorld);

}

