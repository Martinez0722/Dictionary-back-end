import Word from "../models/Words.js"
import fetch from "node-fetch"






class wordController{

    
     static boasVindas = async (req, res)=>{
         return await res.send ({message:"Fullstack Challenge 🏅 - Dictionary"})
    }

    

    static buscaDeUmaPalavra (req, res){

        const word = req.params.word
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) => res.json(word))
        .then(data =>{
            res.send(data)
        
        })
        if(word){
            const search = Word.findOne({word})
            return word
        }
        const save = Word.create({word})
            
     };
          
}






export default wordController;