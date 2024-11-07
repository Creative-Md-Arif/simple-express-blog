import express from "express";
const router = express.Router();
import blogController from "../controllers/blogController.js";

// Create Blog Route
router.post("/create-blog", blogController.createBlog);

// Read Blog Route
router.get("/read-blog", blogController.readBlog);

// Update Blog Route
router.put("/update-blog", blogController.updateBlog);

// Delete Blog Route
router.delete("/delete-blog", blogController.deleteBlog);

export default router;
