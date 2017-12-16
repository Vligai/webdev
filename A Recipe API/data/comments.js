/*
Vladislav Ligai
used: https://github.com/Stevens-CS546/CS-546-WS-Summer-1/blob/master/Lecture%20Code/lecture_07/intermediate_api/data/posts.js
*/
const mongoCollections = require("../config/mongoCollections");
const comments = mongoCollections.comments;
const recipes = require("./recipes");
const uuid = require('node-uuid');
/*-------COMMENTS-SECTION-------*/
let exportedMethods = {
	//Returns a list of all comments in the specified recipe, in the format of: {_id: COMMENT_ID, rid: RECIPE_ID, recipeTitle: RECIPE_TITLE, poster: COMMENT_NAME, comment: COMMENT}
	async getAllComments(recipeId) {
		const commentCollection = await comments();
		return await commentCollection.find({recipeId: recipeId}).toArray();
	},
	//Returns the comment specified by that cid in the format of {_id: COMMENT_ID, rid: RECIPE_ID, reciipeTitle: RECIPE_TITLE, poster: COMMENT_NAME, comment: COMMENT}
	async getCommentById(id) {
		const commentCollection = await comments();
		const comment = await commentCollection.findOne({ _id: id });
		if (!comment) throw "Comment not found!";
			return comment;
	},
	//Creates a new comment with the supplied data in the request body for the stated recipe, and returns the new comment
	async addComment(recipeId, poster, comment) {
		if (typeof poster !== "string") throw "No poster provided!";
		if (typeof comment !== "string") throw "No comment provided!";
		const commentCollection = await comments();
		const commentRecipe = await recipes.getRecipeById(recipeId);
		let newComment = {
              recipeId: recipeId,
              recipeTitle: commentRecipe.title,
              _id: uuid.v4(),
              poster: poster,
              comment: comment
        };
		recipes.addCommentToRecipe(recipeId, newComment._id, newComment.poster, newComment.comment);
		const newInsertInformation = await commentCollection.insertOne(newComment);
		const newId = newInsertInformation.insertedId;
		return await this.getCommentById(newId);
	  },
	//Updates the specified comment for the stated recipe with only the supplied changes, and returns the updated comment
	async updateComment(recipeId, commentId, updatedComment) {
		const commentCollection = await comments();
		let updatedCommentData = {};
			if (updatedComment.poster)
                updatedCommentData.poster = updatedComment.poster;
            if (updatedComment.comment)
                updatedCommentData.comment = updatedComment.comment;
            let updateCommand = {
                $set: updatedCommentData
            }; 
		await recipes.removeCommentFromRecipe(recipeId, commentId); 
		await commentCollection.updateOne({ _id: commentId }, updateCommand);
		const newComment = await this.getCommentById(commentId);
		await recipes.addCommentToRecipe(recipeId, newComment._id, newComment.poster, newComment.comment);
		return newComment;
	  },
	/*Deletes the comment specified*/
	async removeComment(id) {
		const comment = await this.getCommentById(id);
		const commentCollection = await comments();
		const deletionInfo = await commentCollection.removeOne({ _id: id });
		if (deletionInfo.deletedCount === 0) {
		  throw `Could not delete comment with id of ${id}`;
		}else {
           return await recipes.removeCommentFromRecipe(comment.recipeId, id);
        }
	}
}
module.exports = exportedMethods;