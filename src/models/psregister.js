const mongoose = require("mongoose");

const PSstudentSchema = new mongoose.Schema({
    id:{
        type: String,
        required: [true, "Please Enter Name"]
    },
    name: {
        type: String,
        required: [true, "Please enter a Username"]
    },
    mobile: {
        type: Number,
        required: [true, "Please enter Valid number"]
    },
    company: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
        }
    ,
    skills: {
        type: String,
        required: true
        },
    yeargrad: {
        type: Number,
        required: true
        }
})


const PSRegister = new mongoose.model("PSReg_form", PSstudentSchema);

module.exports = PSRegister;