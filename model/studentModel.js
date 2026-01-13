import mongoose from "mongoose";
import studentSchema from "../schema/studentSchema.js"

const studentModel = mongoose.model("employees",studentSchema);
export default studentModel;