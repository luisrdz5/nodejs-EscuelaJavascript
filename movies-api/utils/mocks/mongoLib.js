const sinon = require('sinon');
const { moviesMock, filteredMoviesMock } = require ("./movies");

const getAllStub = sinon.stub();
getAllStub.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags: { $in: ['Drama']}};
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Drama'));

const createStub = sinon.stub().resolves(moviesMock[0].id);
// se crea Stub de getMovie
const getMovieStub = sinon.stub();
getMovieStub.resolves(moviesMock[0]);
// se crea Stub de updateMovie
const updateMovieStub = sinon.stub().resolves(moviesMock[0].id);;
// se crea Stub de deleteMovie
const deleteStub = sinon.stub().resolves(moviesMock[0].id);;



class MongoLibMock {
    getAll(collection, query){
        return getAllStub(collection, query);
    }
    get(collection, id){
        return getMovieStub(collection, id);
    }
    create(collection, data){
        return createStub(collection, data);
    }
    update(collection, id, movie){
        return updateMovieStub(collection, id, movie )
    }
    delete( collection, id ) {
        return deleteStub( collection, id );
    }
}

module.exports = {
    getAllStub,
    createStub,
    MongoLibMock,
    getMovieStub,
    updateMovieStub,
    deleteStub
}