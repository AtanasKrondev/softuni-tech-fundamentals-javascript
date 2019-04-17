const Article = require('../models/Article')

module.exports = {
    index(req, res) {
        Article
            .find()
            .distinct('author', function (err, data) {
                console.log(data);
                res.render('authors/index', { authors: data })
            })
    }
}