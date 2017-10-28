/*
Vladislav Ligai
used: https://github.com/Stevens-CS546/CS-546-WS-Summer-1/blob/master/Lecture%20Code/lecture_07/intermediate_api/routes/posts.js
*/
const express = require('express');
const router = express.Router();
const data = require("../data");
const commentsData = data.comments;
const recipesData = data.recipes;
/*-------COMMENTS-ROUTER-------*/
//GET	/comments/:commentId
router.get("/:commentId", async (req, res) => {
  try {
    const comment = await commentsData.getCommentById(req.params.commentId);
    res.json(comment);
  } catch (e) {
    res.status(404).json({ error: "Comment with this ID is not found!" });
  }
});
//GET	/comments/recipe/:recipeId
router.get("/recipe/:recipeId", async (req, res) => {
  try {
    const commentList = await commentsData.getAllComments(req.params.recipeId);
    res.json(commentList);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
//POST	/comments/:recipeId/
router.post("/:recipeId", async (req, res) => {
  const commentData = req.body;
  if (!commentData) 
        return res.status(400).json({ message: "No data given!" });
  if (!commentData.poster) 
        return res.status(400).json({ message: "Please include a poster that is in a string format!" });
  if (!commentData.comment)
        return res.status(400).json({ message: "Please include a comment that is in a string format!" });
  try {
    //const { title, body, tags, posterId } = commentData;
    const newComment = await commentsData.addComment(req.params.recipeId, commentData.poster, commentData.comment);
    res.json(newComment);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
//PUT	/comments/:recipeId/:commentId
router.put("/:recipeId/:commentId", async (req, res) => {
  const commentData = req.body;
  if (!commentData) 
        return res.status(400).json({ message: "No data given!" });
  try {
	const getComment = await commentsData.getCommentById(req.params.commentId)
  } catch (e) {
    res.status(404).json({ error: "Comment with this ID is not found!" });
  }
  try {
    const newComments = await commentsData.updateComment(req.params.recipeId, req.params.commentId, commentData);
    res.json(newComments);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
//DELETE	/comments/:id
router.delete("/:id", async (req, res) => {
  try {
    await commentsData.getCommentById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Comment with this ID is not found!" });
  }
  try {
    await commentsData.removeComment(req.params.id);
	res.sendStatus(200);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
module.exports = router;