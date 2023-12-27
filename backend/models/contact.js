const mongoose = require ("mongoose");

const contact = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
        number:{
            type: Number,
            required :true
    },
        Address:{
            type:String,
            require:true
    },
        state:{
            type:String,
            require:true
    },
        city:{
            type:String,
            require:true
    },
        message:{
            type:String,
            require:true
    }

});

module.exports = mongoose.model("contact", contact);