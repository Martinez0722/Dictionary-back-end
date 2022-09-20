import fs from "fs"
import wordList from "./src/models/WordList.js"
import readLine  from "readline"
const file_name = './normal.txt'
import mongoose from "mongoose"

const path =  `${file_name}`




function fileOpener(path){
    fs.readFile(path, 'utf-8', function(error,data){
        if(error){
            console.log('erro de leitura'+error.message)
        }else{

            for(let word in data){
              const reader = readLine.createInterface(data)({
              })
              console.log(reader)
                
            }
            
        }
    })
}


fileOpener(path)
export default fileOpener;


