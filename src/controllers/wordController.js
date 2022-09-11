

class wordController{

    
     static boasVindas = async (req, res)=>{
         return await res.send ({message:"Fullstack Challenge 🏅 - Dictionary"})
    }

    static buscaDePalavras(req, res){
        const word = req.body
        word.json()
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) => res.json())
        .then(data =>{
           res.send(data)
        });
       }
       
    
}

export default wordController;