const Band = require('../models/Band');

module.exports = {
  getIndex: function (req, res) {
    Band.find({})
      .then((bands) => res.render('index', { bands }));
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    Band.create(req.body)
      .then(() => res.redirect('/'))
      .catch(() => res.redirect('create'));
  },
  getEdit: function (req, res) {
    Band.findById(req.params.id)
      .then((band) => res.render('edit', { band }))
  },
  postEdit: function (req, res) {
    Band.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect('/'));
  },
  getDelete: function (req, res) {
    Band.findById(req.params.id)
      .then((band) => res.render('delete', { band }))
  },
  postDelete: function (req, res) {
    Band.findByIdAndDelete(req.params.id)
      .then(() => res.redirect('/'));
  }
};