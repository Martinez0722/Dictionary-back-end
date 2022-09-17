import express from "express"
import wordController from "../controllers/wordController.js";


const router = express.Router();


router.get("/", wordController.boasVindas)
router.get("/buscadeumapalavra/:word", wordController.buscaDeUmaPalavra)
router.get("/historico", wordController.historico )
router.post("/favoritos", wordController.palavraFavorita )
router.get('/listafavoritos', wordController.historicoPalavraFavorita)
router.delete("/deletarfavorito", wordController.deletarFavorito)




export default router;