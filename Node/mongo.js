const util = require('util');
const {MongoClient} = require('mongodb')

const timeoutPromise = util.promisify(setTimeout);

const service = {
  client: null,
  db: null,

  async connect(url, databaseName){
    const opt = {
      useUnifiedTopology: true
    };

    this.client = await MongoClient.connect(url, opt);
    console.log(`connected to ${url}`);
    return this.switchDatabase(databaseName);
  },

  async close(){
    return this.client.close();
  },

  switchDatabase(name){
    this.db = this.client.db(name);
    return this.db;
  },

  async isUp(){
    try{
      const healthCheck = this.db
      .listCollections()
      .toArray()
      .then(()=> true);

      const timeout = timeoutPromise(250).then(()=>false);
      return await Promise.race([healthCheck, timeout]);
    }catch(err){
      return false;
    }
  }
}

module.exports = service;