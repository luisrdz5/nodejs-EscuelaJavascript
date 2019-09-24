const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock,MoviesServiceMock } = require('../utils/mocks/movies.js');
const testServer = require('../utils/testServer');

describe('routes - movies', function() {
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMock
    });
    const request = testServer(route);
    describe('GET /movies', function(){
        it('should respond with status 200' , function(done){
            request.get('/api/movies').expect(200,done)
        });
        it('should respond with the list of movies', function(done){
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body,{
                    data: moviesMock,
                    message: 'movies listed'
                });
                done();
            })
        });
    });
    describe('GET /movies/:movieId', function(){
        it('should respond with status 200' , function(done){
            request.get(`/api/movies/${moviesMock[0].id}`).expect(200,done)
        });
        it('should respond with the movie requested', function(done){
            request.get(`/api/movies/${moviesMock[0].id}`).end((err, res) => {
                assert.deepEqual(res.body,{
                    data: moviesMock[0],
                    message: 'movie retrieved'
                });
                done();
            })
        });
    });
    
    describe('POST /movies/', function(){
        it('should respond with status 201' , function(done){
            request.post('/api/movies/').expect(201,done)
        });
        it('should respond with the id created', function(done){
            request.post('/api/movies')
            .type('json')
            .set("Content-Type", "application/json")
            .send({
                    "title": moviesMock[0].title,
                    "year": moviesMock[0].year,
                    "cover": moviesMock[0].cover,
                    "description": moviesMock[0].description,
                    "duration": moviesMock[0].duration,
                    "contentRating": moviesMock[0].contentRating,
                    "source": moviesMock[0].source,
                    "tags": moviesMock[0].tags    
            })
            .end((err, res) => {
                assert.deepEqual(res.body,{
                    data: moviesMock[0].id,
                    message: 'movie created'
                });
                done();
            })
        });
    });
    describe('PUT /movies/:movieId', function(){
        it('should respond with status 200' , function(done){
            request.put(`/api/movies/${moviesMock[0].id}`).expect(200,done)
        });
        it('should respond with the id updated', function(done){
            request
                .put(`/api/movies/${moviesMock[0].id}`)
                .set({
                    "title": "Avictor"
                })
                .expect(200)
                .end((err, res) => {
                    assert.deepEqual(res.body,{
                        data: moviesMock[0].id,
                        message: 'movie updated'
                    });
                    done();
                })
        });
    });
    describe('PATCH /movies/:movieId', function(){
        it('should respond with status 200' , function(done){
            request.patch(`/api/movies/${moviesMock[0].id}`).expect(200,done)
        });
        it('should respond with the id patched', function(done){
            request
                .put(`/api/movies/${moviesMock[0].id}`)
                .set({
                    "title": "Avictor"
                })
                .expect(200)
                .end((err, res) => {
                    assert.deepEqual(res.body,{
                        data: moviesMock[0].id,
                        message: 'movie updated'
                    });
                    done();
                })
        });
    });
    describe('DELETE /movies/:movieId', function(){
        it('should respond with status 200' , function(done){
            request.delete(`/api/movies/${moviesMock[0].id}`).expect(200,done)
        });
        it('should respond with the id deleted', function(done){
            request
                .delete(`/api/movies/${moviesMock[0].id}`)
                .expect(200)
                .end((err, res) => {
                    assert.deepEqual(res.body,{
                        data: moviesMock[0].id,
                        message: 'movie deleted'
                    });
                    done();
                })
        });
    });
    describe('GET /movies/notvalidmovie', function(){
        it('should respond with status 400' , function(done){
            request.get('/api/movies/notvalidmovie').expect(400,done)
        });
    })
});
