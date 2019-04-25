const Book = require('../models/Book');

module.exports = {
  getIndex: function (req, res) {
    let books = Book.find({})
      .then((books) => res.render('index', { books }));
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    Book.create(req.body)
      .then(() => res.redirect('/'))
      .catch(() => res.redirect('create'));
  },
  getEdit: function (req, res) {
    Book.findById(req.params.id)
      .then((book) => res.render('edit', { book }));
  },
  postEdit: function (req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect('/'))
  },
  getDelete: function (req, res) {
    Book.findById(req.params.id)
      .then((book) => res.render('delete', { book }));
  },
  postDelete: function (req, res) {
    Book.findByIdAndRemove(req.params.id)
      .then(() => res.redirect('/'))
  }
};