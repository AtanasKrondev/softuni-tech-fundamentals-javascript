const Mountaineer = require('../models/Mountaineer');

module.exports = {
    getIndex: function (req, res) {
        Mountaineer.find({})
            .then((mountaineers) => res.render('index', { mountaineers }));
    },
    getCreate: function (req, res) {
        res.render('create');
    },
    postCreate: function (req, res) {
        Mountaineer.create(req.body)
            .then(() => res.redirect('/'));
    },
    getEdit: function (req, res) {
        Mountaineer.findById(req.params.id)
            .then((mountaineer) => res.render('edit', { mountaineer }));
    },
    postEdit: function (req, res) {
        Mountaineer.findByIdAndUpdate(req.params.id, req.body)
            .then(() => res.redirect('/'));
    },
    getDelete: function (req, res) {
        Mountaineer.findById(req.params.id)
            .then((mountaineer) => res.render('delete', { mountaineer }));
    },
    postDelete: function (req, res) {
        Mountaineer.findByIdAndDelete(req.params.id)
            .then(() => res.redirect('/'));
    }
};