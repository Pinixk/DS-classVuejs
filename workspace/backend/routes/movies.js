var express = require('express');
var router = express.Router();
var moives = require('../movies.json');

/* GET users listing. */
router.get('/', function (req, res, next) {
   res.send(movies);
});

router.get('/:id', function (req, res, next) {
   var id = parseInt(req.params.id, 10)
   var movie = movies.filter(function (moive) {
      return movie.id === id;
   });
   res.send(movie);
})

module.exports = router;