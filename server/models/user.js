const db = require('../database');

module.exports = {
  getAll: () => {
    return db.find({}).sort().exec();
  },
  getUser: (user) => {
    return db.findOne({ username: user }).sort().exec();
  },
  postUser: (input) => {
    console.log('input model: ', input);
    return db.create(input);
  },
};
