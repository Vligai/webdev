/*
Vladislav Ligai
used: https://github.com/Stevens-CS546/CS-546-WS-Summer-1/blob/master/Lecture%20Code/lecture_07/intermediate_api/data/users.js
*/
const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('uuid/v4');
/*-------RECIPES-SECTION-------*/
let exportedMethods = {
	//Responds with a list of all recipes in the format of {_id: RECIPE_ID, title: RECIPE_TITLE}
	getAllRecipes(){
		return recipes().then((recCollection) => {
			//{_id: RECIPE_ID, title: RECIPE_TITLE}
            return recCollection.find({}).project({ _id: 1, title: 1 }).toArray();
        });
    },
	//Responds with the full content of the specified recipe
	getRecipeById(id){
		return recipes().then((recCollection) => {
            return recCollection.findOne({ _id: id }).then((recipe) => {
                if (!recipe) throw "Recipe with this ID is not found!";
                return recipe;
            });
        });
	},
	//Creates a recipe with the supplied data in the request body, and returns the new recipe
	addRecipe(title, ingredients, steps){
		 return recipes().then((recCollection) => {
            let newRecipe = {
                _id: uuid(),
                title: title,
                ingredients: ingredients,
                steps: steps,
                comments: []
            };
            return recCollection.insertOne(newRecipe).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getRecipeById(newId);
            });
        });		
	},
	//Updates the specified recipe with only the supplied changes, and returns the updated recipe
	updateRecipe(id, rec) {
        return this.getRecipeById(id).then((curr) => {
            let updated_recipe = {};
            if ('title' in rec) 
                updated_recipe.title = rec.title;
            if ('ingredients' in rec) 
                updated_recipe.ingredients = rec.ingredients;
            if ('steps' in rec)
                updated_recipe.steps = rec.steps;
			//not sure if we need, maybe when updating requires importing comments
			/*
			if ('comments' in rec) 
                updated_recipe.comments = rec.comments;
			*/
			let updateCommand = {
                $set: updated_recipe
            };
			return recipes().then((recCollection) => {
				return recCollection.updateOne({ _id: id }, updateCommand).then(() => {
					return this.getRecipeById(id);
				});
            });
        });
    },
	//Deletes the recipe
	removeRecipe(id) {
        return recipes().then((recCollection) => {
            return recCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not recipe user with id of ${id}`)
                }
            });
        });
    },
	//removeCommentFromRecipe from lecture code 7
	removeCommentFromRecipe(id, commentId) {
         return recipes().then((recCollection) => {
            return recCollection.updateOne({ _id: id }, {
                $pull: {
                    comments: {
                        _id: commentId
                    }
                }
            });
         });   
    },
	//addCommentToRecipe from lecture code 7
	addCommentToRecipe(recipeId, commentId, poster, comment) {
        return recipes().then((recCollection) => {
            return recCollection.updateOne({ _id: recipeId }, {
                $addToSet: {
                    comments: {
                        _id: commentId,
                        poster: poster,
                        comment: comment
                    }
                }
            });
        });
    }
}
module.exports = exportedMethods;