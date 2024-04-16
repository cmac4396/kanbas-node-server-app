import mongoose from "mongoose";
const ModuleLesson = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  module: { type: String, required: true }
});

const moduleSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: String,
    course: String,
    lessons: [ModuleLesson],
  },
  { collection: "modules" });

export default moduleSchema;