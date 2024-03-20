const express = require('express');
const app = express();
const http=require('http');
const server= http.createServer(app);

const path=require('path');
path.resolve('./public')

app.use(express.static(path.resolve('./public')))
const {Server}=require('socket.io');

const ws=new Server(server);

ws.on('connection',()=>{
    console.log('new user hahahgahgha');
})

server.listen(5000,()=>{
    console.log(`server started at 5000`);
})
app.get('/',(req,res)=>{
    console.log('raj is here');

 res.sendFile('./public/index.html')
})

// app.listen(6969,()=>{
//     console.log('server is running at'+ 6969);

// })


// server need 3 things
//1) reuire express
// rquire port to start the application
// define route
// 1) app.listen
// 2) app.get