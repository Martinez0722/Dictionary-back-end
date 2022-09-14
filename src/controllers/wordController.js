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
            
            
            
          
        //    const dados  = data
        //    const palavraRegistrada = Word.findOne({dados})
        //    
            
        //    return 'Palavra já registrada'
        //    if(!cache)
        //         const save = Word.create(cache)   
           
            
        //    const find = Word.findOne(cache)
        ;
        
    }
    
    // static historicoDePalavras = async (req,res) =>{
    //     const{data} = req.body 
    //     const wordSearched= await Word.findOne({data})
    //     if(!data){
    //         const word = await Word.create(req.body)
    //     }
    //     res.send(data)
    // }
    
          
}
export default wordController;