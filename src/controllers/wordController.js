import fetch from "node-fetch";

class wordController{

    
     static boasVindas = async (req, res)=>{
         return await res.send ({message:"Fullstack Challenge 🏅 - Dictionary"})
    }

    static buscaDeUmaPalavra(req, res){
        const {word} = req.body
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) => res.json(word) )
        .then(data =>{
           res.send(data)
        });
    }
          
}
export default wordController;