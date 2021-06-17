var db = require('../db');


module.exports = function() {

  db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, hashed_password BLOB, salt BLOB, name TEXT)");
    db.run("CREATE TABLE IF NOT EXISTS federated_credentials ( \
      provider TEXT NOT NULL, \
      subject TEXT NOT NULL, \
      user_id INTEGER NOT NULL, \
      PRIMARY KEY (provider, subject) \
    )");

  });

  //db.close();

};
