var connect = require('connect');
connect.createServer(
    connect.static(__dirname + "/html")
).listen(8080);