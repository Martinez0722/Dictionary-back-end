import Word from "../models/Words.js"
import fetch from "node-fetch"
import favoriteWord from "../models/FavoriteWord.js"






class wordController{

    
     static boasVindas = async (req, res)=>{

         return await res.send ({message:"Fullstack Challenge 🏅 - Dictionary"})
    }


    static buscaDeUmaPalavra = async (req, res) => {

        const wordFromParam = req.params.word
        
        const wordFound = await Word.findOne({word: wordFromParam})
        
        if (wordFound)
            return res.status(200).send(wordFromParam)

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordFromParam}`)
        .then((resApi) => resApi.json())
        .then(async data  => { 
           await Word.create({ word:wordFromParam })
            return res.send(data)
            
        })
            
    };

    static historico = async(req, res) => {
            Word.find(function (err, Words) {
            if(err){
                res.status(500).send({message: err.message})
            }
                res.status(200).send({Words})
        })
    }
    
    static palavrafavorita = async (req, res) =>{
        const word = req.body.word 
        
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) => res.json(word))
        .then(data =>{
            res.send(data)
            const salvar = favoriteWord.create({word})
        })
    }

    
}






export default wordController;