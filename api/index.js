const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const multer = require("multer");
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const conversationRoute = require('./routes/conversations');
const messageRoute = require('./routes/messages');
const path = require('path');

dotenv.config();

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => {
    console.log('connected to Mongo')
    }
)

app.use('/images', express.static(path.join(__dirname, 'public/images')));

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// using multer to upload files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });

  // routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);

app.listen(8800, () => {
    console.log('Backend server is running');
})