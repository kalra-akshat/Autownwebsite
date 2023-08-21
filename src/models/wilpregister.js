const mongoose = require("mongoose");

const wilpstudentSchema = new mongoose.Schema({
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
})


const Register = new mongoose.model("Reg_form", wilpstudentSchema);

module.exports = Register;