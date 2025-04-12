import mongoose from "mongoose";

const lawyerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobile: String,
  password: String,
  photo: String,
  idFront: String,
  idBack: String,
  lawyerLicense: String,
  userType: {
    type: String,
    enum: ["client", "lawyer", "admin"],
    default: "lawyer",
    required: true,
  },
});

export default mongoose.model("Lawyer", lawyerSchema);
