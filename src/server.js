// const expresss = require("express")
// IMPORT THE ROUTES PLEASE
import express from 'express';
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'

const api = express();

api.get('/', (req, res) => {
    res.json({ message: 'welcome to our API' });
});

// Routes, (DONT FORGET TO ADD THE ROUTER HERE PLEASE)

api.use('/user', userRouter);

api.use('/product', productRouter)

api.listen(3000, () => {
    console.log("Server Working on web; https://api-node-express.onrender.com")
});