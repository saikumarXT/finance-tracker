import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { userRouter } from './controllers/userController.js';
import {JWT_SECRET_KEY} from '../src/config.js';

const app=express();
mongoose.connect('mongodb+srv://note:pZZLU1j2eZ1jI5Hb@cluster1111.0l4ggr5.mongodb.net/finance-app')


app.use(express.json());
app.use(cors());



app.use('/api/v1/user',userRouter);



app.listen((3000),()=>{
    console.log('http://localhost:3000')
});

