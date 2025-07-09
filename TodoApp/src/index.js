import http from 'http'
import app from './app.js';

let Port=5000;

let server=http.createServer(app)

server.listen(Port,()=>{
    console.log(`server is running on ${Port}`);
    
})