import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import mediaRoutes from "./routes/MediaRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());  
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


app.use("/api/auth", authRoutes);
app.use("/media",mediaRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: err.message || "Something went wrong!",
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

