/*Vladislav Ligai*/
const router = require('express').Router();
const data = require('../Data/about');

router.get('/', (req, res) => {
  res.json(data);
});
module.exports = router;