import mongoose from "mongoose";

const schoolschema = new mongoose.Schema({
    name: {type:String, required:true, unique:true},
    description: {type:String, required:true, unique:true},
    link: {type:String, required:true, unique:true},
});

const School= mongoose.models.School || mongoose.model('School', schoolschema);

export default School;