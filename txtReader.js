import fs from "fs"
const file_name = './english.txt'

const path =  `${file_name}`


function fileOpener(path){
    fs.open(path, 'r', function(error,data){
        if(error){
            console.log('erro de leitura'+error.message)
        }else{
            
            console.log(data)
        }
    })
}

const str = fileOpener.data



fileOpener(path)
export default fileOpener;


