const io = reqire('socket.io')(8900, {
    cors: {
        origin:"http//localhost:3000"
    }
});

io.on("connection", (socket) => {
    //when ceonnect
    console.log("a user connected.");    
});