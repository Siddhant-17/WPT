var express = require('express'); //importing the express module into express variable and creating it as a function.
var path = require('path'); //to find the library and extract the desired function multiple times as it would be called upon.
var app = express(); //express function is called and stored in variable named app

//server configuration
app.use(express.static(path.join(__dirname,'public'))); //___dirname - the absolute path is stored in the variable as a string, which has the folder named 'public' which contains the desired html files which needs to be executed.

app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/index.html'));
 }); //waits for the get request and by default it gives the local disk drive path as '/' and then it accepts the request and it has to send the response as the landing page.


app.get('/hello', function (req, res) {
    var person={firstName:'Ravi',lastName:'Tambade',age:47};
    res.send(person);
}); //same thing as the above happens in this too, the request and response needs to be acknowledged and proceeded accordingly

var server = app.listen(7667, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:7667", host, port)
}); //to start the server and allow port number to listen, accept request and send response.

  