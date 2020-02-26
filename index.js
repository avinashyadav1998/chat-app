const express = require("express");
const app = express();
const socket = require("socket.io");


//-- server code ---
const port = 1111 || process.env.PORT;
let server = app.listen(port,()=>{
	console.log("server is at :",port);
});



// static fles
app.use(express.static('public'));


// -- socket setup -------------
let io = socket(server);

io.on('connection',(socket)=>{
	console.log("made socket connection",socket.id);

	// Handle chat event
	socket.on('chat',(data)=>{
		io.sockets.emit('chat',data);
	});

	socket.on('typing',(data)=>{
		socket.broadcast.emit('typing',data);
	});


});


// on every refresh everytime a new id will be allocated 




