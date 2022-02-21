const database = require('../../src/infra/database/mongo');

module.exports = async () => {
  const db = await database;
  for (const collection of Object.keys(db.connection.collections)) {
    db.connection.collections[collection].deleteMany({});
  }
};
