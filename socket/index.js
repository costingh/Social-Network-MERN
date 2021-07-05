const io = require('socket.io')(8900, {
    cors: {
        origin:"http//localhost:3000"
    }
});

// empty array of users connected (online users)
let users = [];

// method to push user to array, that checks if it is already in the array 
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

// method that removes a user from users array
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  // display message every time a new user connects 
  console.log("A new user has been connected");

  //take userId and socketId from client side
  socket.on("addUser", (userId) => {
    // add user to array of online users
    addUser(userId, socket.id);
    // return the online users array
    io.emit("getUsers", users);
  });

  // when a user disconnects
  socket.on("disconnect", () => {
    console.log("user has disconnected...");
    // remove user from online users array
    removeUser(socket.id);
    // return the online users array
    io.emit("getUsers", users);
  });
});