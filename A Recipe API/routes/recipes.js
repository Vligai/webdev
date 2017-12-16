/*
Vladislav Ligai
used: https://github.com/Stevens-CS546/CS-546-WS-Summer-1/blob/master/Lecture%20Code/lecture_06/routes/users.js
*/
const express = require('express');
const router = express.Router();
const data = require("../data");
const recipesData = data.recipes;
/*-------RECIPES-ROUTER-------*/
//GET	/recipes
router.get("/", (req, res) => {
    recipesData.getAllRecipes().then((rec_list) => {
        res.json(rec_list);
    }, () => {
        res.sendStatus(500);
    });
});
//GET	/recipes/:id
router.get("/:id", (req, res) => {
    recipesData.getRecipeById(req.params.id).then((recipe) => {
        res.json(recipe);
    }).catch(() => {
        res.status(404).json({ message: "Recipe with this ID is not found!" });
    });
});
//POST	/recipes
router.post("/", (req, res) => {
    let recipe = req.body;
	if (!recipe) 
        return res.status(400).json({ message: "No data given!" });
    if (!recipe.title || typeof recipe.title !== 'string') 
        return res.status(400).json({ message: "Please include a title that is in a string format!" });
    if (!recipe.ingredients)
        return res.status(400).json({ message: "Please include ingridients!" });
    if (!recipe.steps)
        return res.status(400).json({ message: "Please include steps!" });
    recipesData.addRecipe(recipe.title, recipe.ingredients, recipe.steps)
        .then((newRecipe) => {
            res.json(newRecipe);
        }, () => {
            res.sendStatus(500);
        });
});
//PUT	/recipes/:id
router.put("/:id", (req, res) => {
    let recipe = req.body;
    if (!recipe)
        return res.status(400).json({ message: "No data given!" });
	recipesData.getRecipeById(req.params.id).then(() => {
        return recipesData.updateRecipe(req.params.id, recipe)
            .then((updatedRecipe) => {
                res.json(updatedRecipe);
            }, (error) => {
                console.log(error);
                res.sendStatus(500);
            });
    }).catch(() => {
        res.status(404).json({ message: "Recipe with this ID is not found!" });
    });
});
//DELETE	/recipes/:id
router.delete("/:id", (req, res) => {
    recipesData.getRecipeById(req.params.id).then(() => {
        return recipesData.removeRecipe(req.params.id)
            .then(() => {
                res.sendStatus(200);
            }).catch(() => {
                res.sendStatus(500);
            });
    }).catch((err) => {
        console.log(err);
        res.status(404).json({ message: "Recipe with this ID is not found!" });
    });
});
module.exports = router;