const db = require('../database');

module.exports = {
  getAll: () => {
    return db.find({}).sort({ score: -1 }).exec();
  },
  getUser: (user) => {
    return db.findOne({ username: user });
  },
  postUser: (input) => {
    return db.create(input);
  },
  updateScore: (user) => {
    return db.findOne({ username: user }).then((data) => {
      db.updateOne({ _id: data._id }, { score: data.score + 1 }).then(() =>
        db.findOne({ username: user }),
      );
    });
  },
};
