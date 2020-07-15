import http from 'http';
import dt from './myfristmodule';

http.createServer(function(req , res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.writeHead("the Date and Time currently:" )
    res.end('hello Hell');
}).listen(8080);

