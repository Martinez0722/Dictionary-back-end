import fs from "fs"
import wordList from "./src/models/WordList.js"
const file_name = './english.txt'

const path =  `${file_name}`


const str = function fileOpener(path){
    fs.open(path, 'r', function(error,data){
        if(error){
            console.log('erro de leitura'+error.message)
        }else{
            for(let data in path){
               console.log(data) 
            }
           
        }
    })
}




// export default fileOpener;


