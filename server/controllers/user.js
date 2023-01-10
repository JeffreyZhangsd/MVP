const model = require('../models');

module.exports = {
  get: (req, res) => {
    model.user.getUser();
  },
};
