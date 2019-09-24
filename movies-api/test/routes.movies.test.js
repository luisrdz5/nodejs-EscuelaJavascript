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
            /*
            .send({
                "title": "Avictor",
                "year": 2012,
                "cover": "http://dummyimage.com/130x235.png/5fa2dd/ffffff",
                "description":
                "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris  tortor id nulla ultrices aliquet.",
                "duration": 202,
                "contentRating": "R",
                "source":
                "http://seattletimes.com/dis/parturient/montes/nascetur.html?ut=varius&nulla=ut&sed=blandit&accumsan=non&felis=interdum&ut=in&at=ante&dolor=vestibulum&quis=ante&odio=ipsum&consequat=primis&varius=in&integer=faucibus&ac=orci&leo=luctus&pellentesque=et&ultrices=ultrices&mattis=posuere&odio=cubilia&donec=curae&vitae=duis&nisi=faucibus&nam=accumsan&ultrices=odio&libero=curabitur&non=convallis&mattis=duis&pulvinar=consequat&nulla=dui&pede=nec&ullamcorper=nisi&augue=volutpat&a=eleifend&suscipit=donec&nulla=ut&elit=dolor&ac=morbi&nulla=vel&sed=lectus&vel=in&enim=quam&sit=fringilla&amet=rhoncus&nunc=mauris",
                "tags": ["Horror|Mystery|Thriller", "Drama"]  
            })
            */
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
});
