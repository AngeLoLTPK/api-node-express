import express from "express";
import loginPost from "../controllers/autenticacao/loginPost.js";
import logoutPost from "../controllers/autenticacao/logoutPost.js";


const authRouter = express.Router();

authRouter.post("/login", loginPost);

authRouter.post('/logout', logoutPost);

export default authRouter;