import express, { Router } from 'express';
import getUser from '../controllers/user/getUser.js';
import postUser from '../controllers/user/postUser.js';
import updateUser from '../controllers/user/updateUser.js';
import deleteUser from '../controllers/user/deleteUser.js';
import listUsers from '../controllers/user/listUsers.js'; 

const userRouter = express.Router();


userRouter.get('/', getUser);
userRouter.get('/list', listUsers);

userRouter.post('/', postUser);


userRouter.put('/', updateUser);


userRouter.delete('/', deleteUser);


// EXPORT THE ROUTER HERE 
export default userRouter;