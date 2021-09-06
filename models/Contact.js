const mongoose=require("mongoose");

const schema=mongoose.Schema;
const contactShema = new schema ({
    name:{
        type : String,
        required:true,
    },
    email:{
        type:String,
       //unique:true,
    },
    phone:String,
})

module.exports = Contact = mongoose.model("contact",contactShema);