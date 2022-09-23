import fs from "fs"
import wordList from "./src/models/WordList.js"

const file_name = './normal.txt'


const path =  `${file_name}`


function fileOpener(path){
    const allFileContents = fs.readFileSync(path, 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line => {
    wordList.insertMany({word: line})
    
})
const used = process.memoryUsage().heapUsed /1024/1024;
console.log(`The script uses approximately ${Math.round(used* 100)/100} MB`)}


fileOpener(path)
export default fileOpener;


