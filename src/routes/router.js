import express from "express"
import wordController from "../controllers/wordController.js";




const router = express.Router();

router.get("/", wordController.boasVindas)
router.get(`/buscadepalavras`, wordController.buscaDePalavras)



export default router;