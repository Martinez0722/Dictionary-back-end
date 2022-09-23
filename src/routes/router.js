import express from "express"
import wordController from "../controllers/wordController.js";


const router = express.Router();


router.get("/", wordController.boasVindas)
router.get("/entries/en/:word", wordController.buscaDeUmaPalavra)
router.get("/history", wordController.historico)
router.post("/entries/en/:word/favorite", wordController.palavraFavorita )
router.get('/listafavoritos', wordController.historicoPalavraFavorita)
router.delete("/entries/en/:word/unfavorite", wordController.deletarFavorito)




export default router;