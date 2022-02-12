const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET movie details */
router.get('/movies/:id/details', (req,res)=>{
    const id = req.params.id;

    Movie.findById(id)
    .then((movie)=>{
        res.render('movie-detail', movie)
    })
    .catch((error)=>{console.log(`There was an error loading the movie: ${error}`)})
})

/* GET movies page */
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((movies)=>{
      res.render('movies', {movies})
    })
    .catch(error=>`Error while loading movies: ${error}`)
  });

module.exports = router;