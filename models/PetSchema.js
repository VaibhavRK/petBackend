const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    breed:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('petDetails',PetSchema);