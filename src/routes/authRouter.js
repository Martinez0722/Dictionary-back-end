import AuthController from "../controllers/authController.js";
import express from "express"

const router = express.Router();

router.post("/cadastrar", AuthController.cadastrarUsuario)
router.post("/login", AuthController.login)

export default router;