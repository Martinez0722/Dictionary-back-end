import mongoose from "mongoose"

const wordSchema = new mongoose.Schema(
{
    word:{
            type: String,
            required: true
        },

    // phonetic:{
    //     type: String,
    //     required: true
    //     },

    // phonetics: [
    //     {
    //         text: {
    //             type: String,
    //             required: true
    //             },
    //         audio: {
    //             type: String,
    //             required: true
    //             }
    //     },

    //     {
    //         text: {
    //             type: String,
    //             required: true
    //             },
    //         audio: {
    //             type: String,
    //             required: true
    //             },
    //         license: {
    //             name: {
    //                 type: String,
    //                 required: true
    //                 },
    //             url: {
    //                 type: String,
    //                 required: true
    //                 }
    //         }
    //     }
    // ],

    // meanings: [
    //     {
    //          partOfSpeech: {
    //                 type: String,
    //                 required: true
    //                 },

    //         definitions: [
    //                 {
    //                     definition:{
    //                         type: String,
    //                         required: true
    //                         },
    //                     synonyms: {
    //                         type: String
    //                         },
    //                     antonyms: {
    //                         type: String
    //                         },
    //                     example:{
    //                         type: String,
    //                         required: true
    //                         }
    //                 },
    //             {
    //                 definition:{
    //                     type: String,
    //                     required: true
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms: {
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     },
    //                 example:{
    //                     type: String,
    //                     required: true
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms: {
    //                     type: String
    //                     },
    //                 antonyms: {
    //                     type: String
    //                     },
    //                 example:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     },
    //                 example:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     },
    //                 example:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     },
    //                 example:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms: {
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     }
    //             }
    //         ],
    //         synonyms:{
    //             type: String
    //             },
    //         antonyms:{
    //             type: String
    //             }
    //     },
    //     {
    //         partOfSpeech:{
    //             type: String
    //             },
    //         definitions: [
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     },
    //                 example:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     },
    //                 example:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     },
    //                 example:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     },
    //                 example:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition: {
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     }
    //             },
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     },
    //                 example:{
    //                     type: String
    //                     },
    //             }
    //         ],
    //         synonyms: [
    //             {
    //             type: String
    //             }
    //         ],
    //         antonyms:{
    //                     type: String
    //                     }
    //     },
    //     {
    //         partOfSpeech:{
    //             type: String
    //             },
    //         definitions: [
    //             {
    //                 definition:{
    //                     type: String
    //                     },
    //                 synonyms:{
    //                     type: String
    //                     },
    //                 antonyms:{
    //                     type: String
    //                     }
    //             }
    //         ],
    //         synonyms:{
    //             type: String
    //             },
            
    //         antonyms:{
    //                     type: String
    //                     }
    //     }
    // ],

    // license: {
    //     name:{
    //             type: String
    //             },
    //     url:{
    //         type: String
    //         },
    // },
    // sourceUrls: [
    //     {
    //     type: String
    //     }
    // ]
}
)
const Word = mongoose.model('Word', wordSchema);

export default Word;