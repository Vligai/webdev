/*Vladislav Ligai*/
const router = require('express').Router();
const story = require('../Data/story');

router.get('/', (req, res) => {
  res.json(story);
});
module.exports = router;