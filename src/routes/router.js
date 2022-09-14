import express from "express"
import wordController from "../controllers/wordController.js";
import Word from "../models/Words.js";




const router = express.Router();

const save = function (req, res, next){
 console.log('Safe');
 next();
}

router.get("/", save, wordController.boasVindas)
router.get("/buscadeumapalavra/:word", wordController.buscaDeUmaPalavra)



export default router;