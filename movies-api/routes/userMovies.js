const express = require('express');
const passport = require('passport');

const UserMoviesService = require('../services/userMovies');
const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

//JWT strategy
require('../utils/auth/strategies/jwt');

function userMoviesApi(app) {
  const router = express.Router();
  app.use('/api/user-movies', router);

  const userMoviesService = new UserMoviesService();
  router.get(
    '/:userId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:user-movies']),
    validationHandler({ userId: userIdSchema }, 'params'),
    async function(req, res, next) { 
      const { userId } = req.params;
      console.log(userId);
      try {
        const userMovies = await userMoviesService.getUserMovies({ userId });
        res.status(200).json({
          data: userMovies,
          message: 'user movies listed'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post('/',  
    passport.authenticate('jwt', { session: false }), 
    scopesValidationHandler(['create:user-movies']),
    validationHandler(createUserMovieSchema), 
    async function (req, res, next ){
    const { body: userMovie }= req;
    try{
      const createdUserMovieId = await userMoviesService.createUserMovie({
        userMovie
      });
      res.status(201).json({
        data: createdUserMovieId,
        message: 'user movie created'
      });
    } catch(err){
      next(err);
    } 
  });

  router.delete('/:userMovieId',  
    passport.authenticate('jwt', { session: false }), 
    scopesValidationHandler(['delete:user-movies']),
    validationHandler({userMovieId: movieIdSchema}, 'params'), 
  async function(req, res, next){
    const { userMovieId }= req.params;
    const { userId } = req.body;
    //console.log(`aqui va el userId ${ JSON.stringify(req.body) }`);
    //console.log(`aqui va el params ${ JSON.stringify(req.params) }`);
    try{
      const deletedUserMovieId = await userMoviesService.deleteUserMovie({
        userMovieId,
        userId,
      });
      res.status(200).json({
        data: deletedUserMovieId,
        message: 'user movie deleted'
      })
      console.log(deletedUserMovieId);

    }catch(err){
      next(err)
    }
  });
}
module.exports = userMoviesApi;
