import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';
import { app, server } from './socket/socket.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log('MongoDB is connected'))
  .catch(err => console.error(err));

  // const allowedOrigins = [
  //   'https://naveen-chat-app.vercel.app/',
  //   'http://localhost:3000'
  // ];
  
  // const corsOptions = {
  //   origin: function (origin, callback) {
  //     if (!origin) return callback(null, true);
  
  //     if (allowedOrigins.indexOf(origin) !== -1) {
  //       callback(null, true);
  //     } else {
  //       callback(new Error('Not allowed by CORS'));
  //     }
  //   },
  //   methods: ['GET', 'POST'],
  //   allowedHeaders: ['Content-Type', 'Authorization'],
  // };
  
  
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  
  const PORT = process.env.PORT || 5000;
  


  app.get('/', (req, res) => {
    res.json({ message: 'API is working'});
  });
  
  app.use("/api/auth",authRoutes)
  app.use("/api/message",messageRoutes)
  app.use("/api/users",userRoutes)

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/dist')));



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