const Book = require("../model/bookmodel")




const Getall = async (request,response)=>{
    try {
        const allBook = await Book.find()
        return response.status(200).json({
            "status":"Success",
            "code":"200",
            "message":"Books successfully retrieved",
            "Books":{allBook}
        })


    } catch (error) {
        return response.status(500).json({
            "error":"Server Error",
            "data":{
                error:error.message
            }
    })
    }
    
}

const addbook = async (request,response)=>{
    try {

        const{title,author,availability,genre,publicationDate,edition,summary}= request.body
        const already = await Book.findOne({title,author,publicationDate})
        if(already){
            return response.status(400).json({
            "status":"error",
            "code":"400",
            "message":"Exact book found",
            "error":{
                "detail":"Book already exist in the library that contain exact of your inputted details"
                     }
            })
        }

        const newBook = new Book({title,author,availability,genre,publicationDate,edition,summary})
        await newBook.save()
        return response.status(200).json({
            "status":"Successful",
            "code":"200",
            "message":"Book added successfully",
            "data":{newBook}
        })

    } catch (error) {
        return response.status(500).json({
            "error":"Server Error",
            "data":{
                error:error.message
            }
    })
    }
    
}




const bookdetails = async(request,response)=>{
    try {
       const {id}=request.params
        const bookid = await Book.findById(id)
        if(!bookid){
            return response.status(404).json({
                "status":"error",
                "code":"404",
                "message":"Book not found"
            })
        }
        return response.status(200).json({
            "status":"Successful",
            "code":"200",
            "message":"Book retrieved successfully",
            "data":{bookid}
        })
    } catch (error) {
        return response.status(500).json({
            "error":"Server Error",
            "data":{
                error:error.message
            }
    })
    }
}



//delete book 

const deletebook = async(request,response)=>{
    try {
        const{id}=request.params
        const deletebook = await Book.findByIdAndDelete(id)
        if(!deletebook){
            return response.status(404).json({
                        "status":"error",
                        "code":"404",
                        "message":"Book not found"
                    })
                
        }
    
        return response.status(200).json({
            "status":"Successful",
            "code":"200",
            "message":"Book deleted successfully"
        })
    } catch (error) {
        return response.status(500).json({
            "error":"Server Error",
            "data":{
                error:error.message
            }
        })
    }
  


}



//update a book 

const updatebook = async (request,response)=>{

    try {
        const{id} = request.params
        const {availability}= request.body
        const newbook = await Book.findByIdAndUpdate(id,{availability},{new:true})
        if(!newbook){
            return response.status(404).json({
                "status":"error",
                "code":"404",
                "message":"Book not found"
            })
        }
        return response.status(200).json({
            "status":"Successfully",
            "code":"200",
            "message":"Book updated successfully",
            "data":{newbook}
        })
    } catch (error) {
        return response.status(500).json({
            "status":"Server error",
            "data":{
                error:error.message
            }
        })
    }
    
}



module.exports = {
    Getall,
    addbook,
    bookdetails,
    deletebook,
    updatebook
}