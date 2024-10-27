const mongoose = require("mongoose")



const book = mongoose.Schema({
    title:{type:String , required : true},
    author : {type: String , required : true},
    availability:{type: String , required : true , default :'return'},
    genre:{type:String , required:true},
    publicationDate :{type:Date , required : true},
    edition: {type:String , required:true},
    summary:{type: String , required: true}

},
{
    timestamps:true
})

const Book = mongoose.model("book",book)

module.exports = Book