var express = require('express');
var app = express();
var $ = require("jquery");
var server = require('http').Server(app);
var io = require('socket.io')(server);
var dateFormat = require('dateformat');
var fs = require("fs");

app.set('port', (process.env.PORT || 3000));
app.use('/npm', express.static('node_modules'));
app.use(express.static('app'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/app/index.html');
});

function userLog(str){
  fs.appendFile('log/user.log', str+'\n', function (err) {
    if(err){
        throw err;
    }
});
  //fs.writeFile("log/user.log", str);
}

// User connection and disconnect logging
io.on('connection', function(socket){
  var connDate = dateFormat(new Date(), "isoDateTime");
  console.log('ID(',String(socket.id), ') user connected ' + connDate);
  userLog('ID( ' + String(socket.id) + ' ) user connected ' + connDate);

  socket.on('disconnect', function(){
    var disConnDate = dateFormat(new Date(), "isoDateTime");
    console.log('ID(', String(socket.id), ') user disconnected ' + disConnDate);
    userLog('ID( ' + String(socket.id) + ' ) user disconnected ' + disConnDate);
  });
});

server.listen(app.get('port'), function() {
  console.log('App is running on port ', app.get('port'));
});
