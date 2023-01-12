const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({

    age:{
        type : String,
        require : true,
    },
    city:{
        type : String,
        require : true,
    },
    state:{
        type : String,
        require : true,
    },
});

demoSchema.set("timestamps", true),
module.exports = mongoose.model("user",demoSchema);