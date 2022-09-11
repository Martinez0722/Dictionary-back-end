import express from "express"
import AuthController from "../controllers/authController.js";


const authRouter = express.Router();


authRouter.post("/signup", AuthController.cadastrarUsuario)
authRouter.post("/signin", AuthController.login)

export default authRouter;