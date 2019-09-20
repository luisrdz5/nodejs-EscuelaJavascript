const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub, createStub, getMovieStub, updateMovieStub, deleteStub } = require('../utils/mocks/mongoLib');

const { moviesMock } = require('../utils/mocks/movies');

describe("services - movies", function() {
    const MovieServices = proxyquire('../services/movies', {
        '../lib/mongo': MongoLibMock
    });

    const moviesService = new MovieServices();
    describe('when getMovies method is called', async function () {
        it('should call the getAll MongoLib method', async function() {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });
        it('should return an array of Movies', async function () {
            const result = await moviesService.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected);
        });
    });
    describe('when createMovie method is called', async function () {
        it('should call the createMovie MongoLib method', async function() {
            await moviesService.createMovie({});
            assert.strictEqual(createStub.called, true);
        });
    });
    describe('when getMovie method is called', async function(){
        it('should call the getMovie Mongolib method', async function() {
            await moviesService.getMovie({});
            assert.strictEqual(getMovieStub.called, true);        
        });
        it('should return a Movie', async function() {
            const result = await moviesService.getMovie({});
            const expected = moviesMock[0];
            assert.deepEqual(result, expected);          
        });
    });
    describe('when updateMovie method is called', async function(){
        it('should call the updateMovie Mongolib method', async function(){
            await moviesService.updateMovie({});
            assert.strictEqual(updateMovieStub.called, true);
        });
    })
    describe('when deleteMovie method is called', async function(){
        it('should call the deleteMovie Mongolib method', async function(){
            await moviesService.deleteMovie({});
            assert.strictEqual(deleteStub.called, true);
        });
    })
});
