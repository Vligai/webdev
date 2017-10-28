/*Vladislav Ligai*/
const router = require('express').Router();
const education = require('../Data/education');

router.get('/', (req, res) => {
  res.json(education);
});

module.exports = router;