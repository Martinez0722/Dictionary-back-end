import fs from "fs"
import wordList from "./src/models/WordList.js"
import readLine  from "readline"
const file_name = './english.txt'
import mongoose from "mongoose"

const path =  `${file_name}`




// function fileOpener(path){
//     fs.readFile(path, 'utf-8', function(error,data){
//         if(error){
//             console.log('erro de leitura'+error.message)
//         }
//         else{

//             for(let word in data){
//               const reader = readLine.createInterface(data)({
//               })
//               console.log(reader)
                
//             }
            
//         }
//     })
// }
function fileOpener(path){
    const allFileContents = fs.readFileSync(path, 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line => {
    wordList.create({word: line})
    
})
const used = process.memoryUsage().heapUsed /1024/1024;
console.log(`The script uses approximately ${Math.round(used* 100)/100} MB`)}


fileOpener(path)
export default fileOpener;


