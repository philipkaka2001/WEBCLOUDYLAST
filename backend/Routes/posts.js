const express = require ('express');

const { getPosts, getPost, createPost, updatePost, likePost, deletePost } = require ('../Controllers/posts.js');

const router = express.Router();

// router.get('/Download', getPosts);
// router.post('/Upload', createPost);
// router.get('/Download/:id', getPost);
// router.patch('/Upload/:id', updatePost);
// router.delete('/Upload/:id', deletePost);
// router.patch('/Download/:id/likePost', likePost);
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

module.exports = router;