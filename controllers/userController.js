const demoModelSchema = require('../model/demoModelSchema');
const demoSchema = require('../model/demoModelSchema');

const getUser = async (req,res) => {
    try{
        console.log("Get Started");
        const demo = await demoSchema.find();
        res.json(demo);
    }catch(err)
    {
        res.send("Error" +  err);
    }
};

const createUser = async (req,res) => {
    console.log(req.body);

    const demodata = new demoModelSchema({
        age : req.body.age,
        city : req.body.city,
        state : req.body.state,
    });
    try{
        const addRes = await demodata.save();
        res.json({
            status : "Successful",
            data : addRes,
        });
    }catch(err)
    {
        res.send({
            status : "Failure",
            message : "Error-Occur" + err.message
        });
    }
};

const updateUser = async (req,res) => {
    console.log(req.params.id);
    try{
         const demo =  await demoSchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
         );
         res.json({demo});
    }catch(err)
    {
            res.send("Error" + err);
    }
    };

const deleteuser = async (req,res) => {
 await demoSchema.findByIdAndDelete(req.params.id);
 try{
    res.status(204).send().json({
        status : "Success",
        data : {},
    });
 }
 catch(err)
 {
    res.status(500).json({
        status: "Failed",
        message: err,
 });
}
};

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteuser,
};