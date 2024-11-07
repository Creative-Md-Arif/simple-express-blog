import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import blogRoutes from  "./routes/blogRoutes.js";

dotenv.config();
const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use routes for blog API
app.use("/api/blogs", blogRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
