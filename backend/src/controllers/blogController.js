import Blog from "../models/blogModel.js";
import mongoose from "mongoose";

// Create a new blog
export const createBlog = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newBlog = new Blog({
      title,
      content,
      author,
    });
    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create blog" });
  }
};

// Read all blogs
export const readBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ message: "Blog read successfully", blogs });
  } catch (error) {
    res.status(500).json({ message: "Failed to read blogs" });
  }
};

// Update a blog
export const updateBlog = async (req, res) => {
    const { _id, title, content, author } = req.body;
  
    // Convert _id to ObjectId if it's a string
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }
  
    try {
      // Update the blog with the new title, content, and author
      const updatedBlog = await Blog.findByIdAndUpdate(
        _id, 
        { title, content, author }, 
        { new: true } // Return the updated document
      );
  
      if (!updatedBlog) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      // Successfully updated the blog
      res.status(200).json({ message: "Blog updated successfully", updatedBlog });
    } catch (error) {
      console.error("Error updating blog:", error);
      res.status(500).json({ message: "Failed to update blog" });
    }
  };

// Delete a blog
export const deleteBlog = async (req, res) => {
  const { _id } = req.body;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(_id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog" });
  }
};


export default { createBlog, readBlog, updateBlog, deleteBlog };




