import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  idFront: {
    type: String,
  },
  idBack: {
    type: String,
  },
  userType: {
    type: String,
    enum: ["client", "lawyer", "admin"],
    default: "client",
  },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
