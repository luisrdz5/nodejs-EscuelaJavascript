const proxyquire = require('proxyquire');
const { MoviesServiceMock } = require('../utils/mocks/movies.js');
const { testServer } = require('../utils/utilsTestServer.js');



describe('route - not-found', function() {
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMock
    });
    const request = testServer(route);
    describe('GET /not-found', function(){
        it('should respond with status 404' , function(done){
            request.get('/api/movies/not-found').expect(404,done)
        });
    })
})




