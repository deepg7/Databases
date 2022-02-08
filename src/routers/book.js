const express = require("express");
const router = express.Router();

const db=require("../db/index");
const Book = db.books;

router.post("/createData", async (req, res) => {
  try{
    const book = await Book.create(req.body);
  // .then((book) => {
  //   res.send(book);
  // })
  // .catch((err) => {
  //   res.status(500).send(err);
  // });
  res.status(200).send({                         //200 status code-->
    message: "Book created successfully", 
    data:book
  });
 }catch(error){
    res.status(400).send({                     //400 status code-->
      message:"Error has occured",
      error,
    });
 }
});

router.get("/readData", async (req, res) => {
  try{
    const data = await Book.findAll();          // findAll will returns all the lists of my books
    res.status(200).send({
      message:"Books List",
      data                                     //equivalent to data:data
    });
  }catch(error){
    res.status(400).send({
      message:"Cant find the list of books ",
      error,                                   //equivalent to error:error
    })
  }
});

router.post("/readOneData", async (req, res) => {
  try{
    const books = await Book.findOne({                     //findOne will return only one data or first data in my database
      attributes:["name","isbn",["price","mrp"]],
      where:{name:req.body.name}
    });
    res.status(200).send({
      message:"Books List",
      data:books
    });
  }catch(error){
    res.status(400).send({
      message:"Cant find the list of books ",
      error,
    })
  }
});

router.get("/readUniqueData/:id", async (req, res) => {
  try{
    const book = await Book.findByPk(req.params.id);        //findByPk will return the data of specific id which is a primary key
    res.status(200).send({
      message:"Books Found",
      data:book
    });
  }catch(error){
    res.status(400).send({
      message:"Cant find the list of books ",
      error,
    })
  }
});

router.patch("/updateData/:id",async(req,res)=>{
 try{
   const book=await Book.update({                          //update will update the specific data of my particular book 
     name:req.body.name
   },{
     where:{id:req.params.id}
   })

  res.status(200).send({
    message:"Updated the Book",
    data:book
  });

 }catch(error){
   res.status(400).send({
     message:"Error in updating data",
     error
   })
 }
});

router.delete("/deleteData/:id",async(req,res)=>{
  try{
    const book=await Book.destroy({where:{id:req.params.id}})         //destroy will delete the specific data in my table
    if(book===0){
      res.status(200).send({
        message:"Already Deleted the book",
        data:book
      })
    }else{
      res.status(200).send({
        message:"Deleted the book",
        data:book
      })
    }
  }catch(error){
    res.status(400).send({
      message:"Error in deleting a book",
      error
    })
  }
});

module.exports = router;
