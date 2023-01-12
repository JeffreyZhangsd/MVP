const model = require('../models');

module.exports = {
  getAllUsers: (req, res) => {
    model.user
      .getAll()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.statuse(404).send(err));
  },
  get: (req, res) => {
    model.user
      .getUser(req.params.user)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(404).send(err));
  },
  post: (req, res) => {
    model.user
      .postUser(req.body)
      .then(() => res.status(201).send())
      .catch((err) => res.status(404).send(err));
  },
  update: (req, res) => {
    model.user
      .updateScore(req.params.user)
      .then((data) => res.status(204).send(data))
      .catch((err) => res.status(404).send(err));
  },
};
