import AuthController from "../controllers/authController.js";
import express from "express"


const authRouter = express.Router();


authRouter.post("/signup", AuthController.cadastrarUsuario)
authRouter.post("/signin", AuthController.login)

export default authRouter;