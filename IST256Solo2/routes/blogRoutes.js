import express from 'express' ;
import * as blogController from '../controllers/BlogController.js';


const router = express.Router();

// Route for getting all blogs
router.get('/', blogController.getAllBlogs);

//Route for getting a blog by ID
router.get('/', blogController.getBlogByID);

//Route for creating a blog post
router.post ('/', blogController.createBlogPost);

//Route for liking a blog post
router.post ('/', blogController.likeBlogPost);

//Route for adding a comment
router.post ('/', blogController.addBlogComment);

// Route for liking a blog comment
router.post ('/:id/comment/like/:commentIndex', blogController.likeBlogComment);

// Route for deleting a blog post
router.delete('/:id', blogController.deleteBlogPost);

export default router;

