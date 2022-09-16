import mongoose from "mongoose"

const wordListSchema = new mongoose.Schema(
    {
        word:{
                type: String,
                required: true
            }
    }
)
const wordList = mongoose.model('WordList', wordListSchema);

export default wordList;