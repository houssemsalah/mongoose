const express=require("express");
const router=express.Router();
const Contact=require("../models/Contact");
const controllers=require("../controllers/contact.controllers")

// test routing
router.get("/hello",(req,res) => {
    res.send("hello");

});


//post contact
router.post("/", controllers.postContact);

//get all
router.get("/", controllers.getAll);
//get by id
router.get("/:id", controllers.getOne);

//delete contact

router.delete("/:id",controllers.delete);

//update contact
router.put("/:id", controllers.update);

module.exports=router;