import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log('MongoDB is connected'))
  .catch(err => console.error(err));

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)
app.get('/', (req, res) => {
    res.send('Server is working.');
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);