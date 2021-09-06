
//post contact
exports.postContact = async (req,res) => {
    try{
        const newContact = new Contact({... req.body});
        if(!req.body.email){
            res.status(400).send({message:"Email is required !"});
            return;
        }
        const user=await Contact.findOne({email:req.body.email});
        if(user){
            res.status(400).send({message:"user already exist"});
            return;
        }
      const response = await newContact.save();
      res.send({response : response, message:"User is saved"});
    }
    catch(error){
res.status(500).send({message:"cannot save it"})
    }
};

//get all

exports.getAll = async (req,res)=>{
    try{
        const result=await Contact.find()
        res.send({response:result, message:"getting contacts successfully"});
    }
    catch(error){
        res.status(400).send({message :"canot get contacts"})
    }
};

//get by id

exports.getOne = async(req,res) => {
    try{
        const result=await Contact.findOne({_id:req.params.id})
        res.send({response:result, message:"getting contact successfully"});
    }
    catch(error){
        res.status(400).send({message :"there is no contact with this id"})
    }
}

//delete contact

exports.delete = async(req,res) => {
    try {
    const result = await Contact.deleteOne({_id:req.params.id});
    result.n?res.send({response:"user deleted"}):res.send("there is no user with is id");
    }
    catch (error) {
        res.send("there is no contact")
    }
}

//update contact

exports.update = async(req,res) => {
    try{
const result = await Contact.updateOne({_id:req.params.id},{$set:{...req.body}});
result.nModified
? res.send({message :"updated"})
: res.send({message:"contact already updated"});
    }
    catch(error){
res.status(400).send({message : "there is no user with this id"})
    }
}