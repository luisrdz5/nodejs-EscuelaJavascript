const MongoLib = require('../lib/mongo')


class LogService {
    constructor(){
      this.collection = 'logs';
      this.mongoDB = new MongoLib();
    }
    async getLogs({ tags }) {
      const query = tags && { tags: { $in: tags}};
      const logs = await this.mongoDB.getAll(this.collection, query);
      return logs || [];
    }
    async createLog({ log }) {
        const createLogId = await this.mongoDB.create(this.collection, log);
        return createLogId;
      }
}
module.exports = LogService;