import express from "express";


const productRouter = express.Router();


productRouter.get('/', (req, res) => {
    res.json({ message: 'welcome to our API' });
});


productRouter.post('/', (req, res) => {
    res.json({ message: 'Send Post files, datas to our API' });
});


productRouter.put('/', (req, res) => {
    res.json({ message: 'changes, update, view datas of our API' });
});


productRouter.delete('/', (req, res) => {
    res.json({ message: 'Delete datas on API' });
});

export default productRouter;