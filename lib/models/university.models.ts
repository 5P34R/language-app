import mongoose from "mongoose";

const universityschema = new mongoose.Schema({
    name: {type:String, required:true, unique:true},
    description: {type:String, required:true, unique:true},
    link: {type:String, required:true, unique:true},
});

const University= mongoose.models.University || mongoose.model('University', universityschema);

export default University;