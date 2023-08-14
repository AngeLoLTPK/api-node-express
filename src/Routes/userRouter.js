import express from 'express';


const userRouter = express.Router();


userRouter.get('/', (req, res) => {
    res.json({ message: 'welcome to our API' });
});


userRouter.post('/', (req, res) => {
    res.json({ message: 'Send Post files, datas to our API' });
});


userRouter.put('/', (req, res) => {
    res.json({ message: 'changes, update, view datas of our API' });
});


userRouter.delete('/', (req, res) => {
    res.json({ message: 'Delete datas on API' });
});


// EXPORT THE ROUTER HERE 
export default userRouter;