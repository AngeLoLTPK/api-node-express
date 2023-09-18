// const expresss = require("express")
// IMPORT THE ROUTES PLEASE

// in the package.json insert the   "type": "module" bellow main

import express from 'express';

//ele é um midlleware
import bodyParser from 'body-parser';

import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import authRouter from './routers/authRouter.js';
import { PORT } from './config.js';

const api = express();

//ele é um midlleware
// converte toda requesição com body json para objeto no req.body
api.use(bodyParser.json());


api.get('/', (req, res) => {
    res.json({ message: 'welcome to our API' });
});

// Routes, (DONT FORGET TO ADD THE ROUTER HERE PLEASE)

api.use('/user', userRouter);

api.use('/product', productRouter);

api.use('/auth', authRouter);

api.listen(PORT, () => {
   console.log(`Server working on the door ${PORT}`);
    // console.log("Server Working on web; https://api-node-express.onrender.com")
});