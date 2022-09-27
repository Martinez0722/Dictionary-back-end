import Word from "../models/Words.js"
import fetch from "node-fetch"
import favoriteWord from "../models/FavoriteWord.js"
import wordList from "../models/WordList.js"



class wordController{

    
     static boasVindas = async (req, res)=>{

         return await res.send ({message:"Fullstack Challenge 🏅 - Dictionary"})
    }


    static buscaDeUmaPalavra = async (req, res) => {

        const wordFromParam = req.body.word
        
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

    static buscaLista = async(req,res) =>{
        const findList = await wordList.find();
        if(!findList){
            res.status(404).send({message:"List not found"})
        }
        res.send(findList)
    }

    static historico = async(req, res) => {
        const findWord = await Word.find();
        if(!findWord){
            res.status(404).send({message:"Not Found"})
        }
        res.send(findWord)
           
    }
    
    static palavraFavorita = async (req, res) =>{
        const word = req.body.word 
        
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) => res.json(word))
        .then(data =>{
            res.send(data)
            const salvar = favoriteWord.create({word})
        })
    }

    static historicoPalavraFavorita = async(req,res)=>{
      const findFavoriteWord =  await favoriteWord.find()
      if(!findFavoriteWord){
          res.status(404).send({message:"Not Found"})
      }
      res.send(findFavoriteWord)
    }
         


    static deletarFavorito = async (req,res)=>{
        const word = req.body.word;
        const foundWord = await favoriteWord.findOne({word})

        if(!foundWord){
            return res.status(400).send({error:"Palavra não encontrada"})
        }else{
            await favoriteWord.deleteOne({word})
            return res.send({message:"Palavra deletada com sucesso !"})
        }
    }

    
}

export default wordController;