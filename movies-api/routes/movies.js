const express = require('express');
const MoviesService = require('../services/movies');

function movies(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async function(req, res, next) {

    try {
      const moviess = await moviesService.getMovies();

      res.status(200).json({
        data: moviess,
        message: 'movies listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:movieId', async function(req, res, next) {
    const { movieId } = req.params.movieId;
    try {
      const moviess = await moviesService.getMovie({ movieId });

      res.status(200).json({
        data: moviess,
        message: 'movie retrieved'
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function(req, res, next) {

    const { body: movie } = req;

    try {
      const createdMovieId = await moviesService.createMovie({ movie });

      res.status(201).json({
        data: createdMovieId,
        message: 'movie created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieId', async function(req, res, next) {

    const { movieId } = req.params.movieId;
    const { body: movie } = req;

    try {
      const updateMovieId = await moviesService.updateMovie({
        movieId,
        movie
      });

      res.status(200).json({
        data: updateMovieId,
        message: 'movie updated'
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieId', async function(req, res, next) {

    const { movieId } = req.params.movieId;

    try {
      const deleteMovieId = await moviesService.deleteMovie({ movieId });

      res.status(200).json({
        data: deleteMovieId,
        message: 'movie updated'
      });
    } catch (err) {
      next(err);
    }
  });
  router.patch('/:movieId', async function (req, res, next) {
    const {movieId} =req.params;
    const {body: movie} = req;

    try{
      const updateMovieId = await moviesService.partialUpdateMovie({movieId, movie});
      res.status(200).json({
        data: updateMovieId,
        message: 'Movie updated partially'
      })

    }catch(err) {
      next(err);
    }
  });

}

module.exports = movies;
