const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8000;
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get("/", (req,res) =>{
  res.send("Hi")
})

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(port, () => {
  console.log(`Listening at: http://localhost:${port}`);
});

module.exports = app;