import mongoose from "mongoose"

const favoriteWordSchema = new mongoose.Schema(
    {
        word:{
                type: String,
                required: true
            }
    }
)
const favoriteWord = mongoose.model('FavoriteWord', favoriteWordSchema);

export default favoriteWord;