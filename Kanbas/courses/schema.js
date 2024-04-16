import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    number: { type: String, required: true },
    subtitle: { type: String, required: true },
    term: { type: String, required: true },
    image: String,
},
{ collection : "courses"});
export default courseSchema;