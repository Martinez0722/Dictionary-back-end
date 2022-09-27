import express from "express"
import wordController from "../controllers/wordController.js";


const router = express.Router();


router.get("/", wordController.boasVindas)
router.get("/entries/en/", wordController.buscaDeUmaPalavra)
router.get("/history", wordController.historico)
router.get("/list", wordController.buscaLista)
router.post("/entries/en/favorite", wordController.palavraFavorita )
router.get('/favorites', wordController.historicoPalavraFavorita)
router.delete("/entries/en/unfavorite", wordController.deletarFavorito)




export default router;