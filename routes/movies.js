const express = require('express');
const MoviesService = require('../services/movies');
const passport = require('passport');

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

const cacheResponse = require('../utils/cacheResponse.js');
const {
  SIXTY_MINUTES_IN_SECONDS,
  FIVE_MINUTES_IN_SECONDS
} = require('../utils/time');

//JWT strategy
require('../utils/auth/strategies/jwt');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', 
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['read:movies']),
        async function(req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS); 
      //throw new Error('Error getting movies');
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (err) {
      next(err);
    }
  });
  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function(req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS); 
      const { movieId } = req.params;
      try {
        const movies = await moviesService.getMovie({ movieId });

        res.status(200).json({
          data: movies,
          message: 'movie retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );
  router.post('/', 
    passport.authenticate('jwt', { session: false }), 
    scopesValidationHandler(['create:movies']),
    validationHandler(createMovieSchema), async function(
    req,
    res,
    next
  ) {
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
  router.put(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function(req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie
        });

        res.status(200).json({
          data: updatedMovieId,
          message: 'movie updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );
  router.patch(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function(req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie
        });

        res.status(200).json({
          data: updatedMovieId,
          message: 'movie patched'
        });
      } catch (err) {
        next(err);
      }
    }
  );
  router.delete(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['deleted:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function(req, res, next) {
      const { movieId } = req.params;
      try {
        const deletedMovieId = await moviesService.deleteMovie({ movieId });
        res.status(200).json({
          data: deletedMovieId,
          message: 'movie deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}
module.exports = moviesApi;
