const express = require('express');
const router  = express.Router();
const db      = require('../models');

// SHOW ALL FILMS
router.get('/', (req, res) => {
    db.Movie.find()
    .then((allMovies) => {
        res.send(res.json(allMovies));
    })
    .catch((err) => {
        res.send(err);
    })
});

// ADD FILM TO THE DATABASE
router.post('/', (req, res) => {
    
    db.Movie.create(req.body)
    .then((addedMovie) => {
        res.json(addedMovie);
    })
    .catch((err) => {
        res.send(err);
    })
});

// SHOW A MOVIE
router.get('/:movieId', (req, res) => {
    db.Movie.findById(req.params.movieId)
    .then((movie) => {
        res.json(movie);
    })
    .catch((err) => {
        res.send(err);
    })
});

// UPDATE A MOVIE
router.put('/:movieId', (req, res) => {
    db.Movie.findByIdAndUpdate({_id: req.params.movieId}, req.body, {new: true})
    .then((movie) => {
        res.json(movie);
    })
    .catch((err) => {
        res.send(err);
    })
})

//REMOVE A MOVIE

router.delete('/:movieId', (req, res) => {
    db.Movie.remove({_id: req.params.movieId})
    .then(() => {
        res.json({message: 'Film has been deleted.'});
    })
    .catch((err) => {
        res.send(err);
    })
})

module.exports = router;