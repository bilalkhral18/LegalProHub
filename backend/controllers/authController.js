import Client from "../models/ClientModel.js";
import Lawyer from "../models/lawyerModel.js";
import {
  uploadMediaToCloudinary,
  deleteMediaToCloudinary,
} from "../helper/Cloudinary.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Tesseract from "tesseract.js";
import fs from "fs";

// Helper function for text extraction
async function extractText(imagePath) {
  const { data } = await Tesseract.recognize(imagePath, "eng");
  return data.text;
}

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, password, userType } = req.body;
    const files = req.files;

    // Validate user type
    if (!userType || !["lawyer", "client"].includes(userType)) {
      return res.status(400).json({ message: "Invalid user type" });
    }

    // Validate required fields
    if (!firstName?.trim()) {
      return res.status(400).json({ message: "First name is required" });
    }

    if (!lastName?.trim()) {
      return res.status(400).json({ message: "Last name is required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Mobile validation
    const mobileRegex = /^\d{11}$/;
    if (!mobile || !mobileRegex.test(mobile)) {
      return res.status(400).json({ message: "Mobile must be 11 digits" });
    }

    // Check existing users
    const [existingClient, existingLawyer] = await Promise.all([
      Client.findOne({ $or: [{ email }, { mobile }] }),
      Lawyer.findOne({ $or: [{ email }, { mobile }] }),
    ]);

    let errorMessage = "";
    if (existingClient?.email === email || existingLawyer?.email === email) {
      errorMessage += "Email already exists. ";
    }
    if (
      existingClient?.mobile === mobile ||
      existingLawyer?.mobile === mobile
    ) {
      errorMessage += "Mobile number already exists.";
    }
    if (errorMessage)
      return res.status(400).json({ message: errorMessage.trim() });

    // ID Card Validation Logic
    const validateIDCard = async (file, side) => {
      if (!file) return true; // Skip validation if no file

      const text = await extractText(file[0].path);
      const frontKeywords = [
        "Identity Number",
        "Date of Birth",
        "Father Name",
        "Name",
      ];

      const isValid =
        side === "front"
          ? frontKeywords.some((word) => text.includes(word))
          : "Date of Birth" in text && "Father Name" in text && "Name" in text;

      if (!isValid) {
        fs.unlinkSync(file[0].path);
        return false;
      }
      return true;
    };

    // Validate ID Front
    if (files?.idFront && !(await validateIDCard(files.idFront, "front"))) {
      return res.status(400).json({ error: "Invalid ID Front Image" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let uploadedFiles = {};

    // Upload valid files to Cloudinary
    const uploadFile = async (file, fieldName) => {
      if (file) {
        const result = await uploadMediaToCloudinary(file[0].path);
        uploadedFiles[fieldName] = result?.secure_url || null;
        fs.unlinkSync(file[0].path);
      }
    };

    await Promise.all([
      uploadFile(files?.photo, "photo"),
      uploadFile(files?.idFront, "idFront"),
      uploadFile(files?.idBack, "idBack"),

      userType === "lawyer" &&
        uploadFile(files?.lawyerLicense, "lawyerLicense"),
    ]);

    // Create user data
    const userData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      password: hashedPassword,
      userType: userType,
      ...uploadedFiles,
    };

    // Save to database
    const UserModel = userType === "lawyer" ? Lawyer : Client;
    await new UserModel(userData).save();

    res.status(201).json({
      message: "User registered successfully",
      data: userData,
    });
  } catch (error) {
    console.error("Error in signup:", error);

    // Cleanup uploaded files on error
    if (req.files) {
      Object.values(req.files).forEach((files) => {
        files.forEach((file) => {
          if (fs.existsSync(file.path)) {
            fs.unlinkSync(file.path);
          }
        });
      });
    }

    // Handle duplicate error
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({ message: `${field} already exists` });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { identifier, password } = req.body; // identifier can be email or mobile

    // Validate input
    if (!identifier || !password) {
      return res
        .status(400)
        .json({ message: "Email/Mobile and Password are required" });
    }

    // Check both collections in parallel
    const [clientUser, lawyerUser, adminUser] = await Promise.all([
      Client.findOne({ $or: [{ email: identifier }, { mobile: identifier }] }),
      Lawyer.findOne({ $or: [{ email: identifier }, { mobile: identifier }] }),
    ]);

    let user = clientUser || lawyerUser || adminUser;
    let userType = clientUser
      ? "client"
      : lawyerUser
      ? "lawyer"
      : adminUser
      ? "admin"
      : null;
    if (!user) {
      console.log("User not found for:", identifier);
      return res
        .status(400)
        .json({ message: "Invalid email/mobile or password" });
    }

    console.log("User found:", user.email || user.mobile);
    if (!user.password) {
      console.error("Error: Password field missing in user data:", user);
      return res.status(500).json({ message: "Password field missing" });
    }

    // Convert password to string before comparing
    const isMatch = await bcrypt.compare(password.toString(), user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid email/mobile or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, userType }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      userType,
      redirectTo: userType === "lawyer" ? "/lawyer-dashboard" : "/home",
    });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await Client.find();

    res.status(200).json({
      message: true,
      users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getLawyer = async (req, res) => {
  try {
    const users = await Lawyer.find();

    res.status(200).json({
      message: true,
      users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  signup,
  login,
  getUser,
  getLawyer,
};
