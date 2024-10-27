const express = require("express")
const { Getall, addbook, bookdetails, deletebook, updatebook } = require("../control/control")

const router = express.Router()

//get all books in the library
router.get("/getall",Getall)
//add new book
router.post("/addbook",addbook)
//get book detail
router.get("/details/:id",bookdetails)
//delete book
router.delete("/deletebook/:id",deletebook)
//update book
router.put("/updatebook/:id",updatebook)








module.exports = router