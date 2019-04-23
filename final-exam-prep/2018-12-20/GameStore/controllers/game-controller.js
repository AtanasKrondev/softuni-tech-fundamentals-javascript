const Game = require('../models/Game');

module.exports = {
  getIndex: function (req, res) {
    Game.find({})
      .then((games) => res.render('index', { games }));
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    Game.create(req.body)
      .then(() => res.redirect('/'));
  },
  getEdit: function (req, res) {
    Game.findById(req.params.id)
      .then((game) => res.render('edit', { game }));
  },
  postEdit: function (req, res) {
    Game.findOneAndUpdate(req.params.id, req.body)
      .then(() => res.redirect('/'));
  },
  getDelete: function (req, res) {
    Game.findById(req.params.id)
      .then((game) => res.render('delete', { game }));
  },
  postDelete: function (req, res) {
    Game.findByIdAndDelete(req.params.id)
      .then(() => res.redirect('/'));
  }
};