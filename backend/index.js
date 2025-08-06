import express, { json } from 'express';
import path from 'path';
import cors from 'cors';
import mongoose, { connect, get } from 'mongoose';
import dotenv, { config } from 'dotenv';
import cookieParser from 'cookie-parser';


import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';
import { app, server } from './socket/socket.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log('MongoDB is connected'))
  .catch(err => console.error(err));
  
var whitelist = ['http://localhost:3000','https://nchatapp.vercel.app']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(cookieParser());
  const PORT = process.env.PORT || 5000;
  const __dirname = path.resolve();

  
  
  app.get('/', (req, res) => {
    res.json({ message: 'API is working'});
  });
  
  app.use("/api/auth",authRoutes)
  app.use("/api/message",messageRoutes)
  app.use("/api/users",userRoutes)

  app.use(express.static(path.join(__dirname, "/client/dist")));

 app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    statusCode,
    message: err.message || 'Internal Server Error',
  });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);