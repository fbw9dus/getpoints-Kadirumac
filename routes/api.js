var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{user: 'fake', password: 'fake'}]);
});

module.exports = router;
=======
router.get('/', function(req, res, next) {
  res.json([{user: 'fake', password: 'fake'}]);
});

module.exports = router;
>>>>>>> part-2
