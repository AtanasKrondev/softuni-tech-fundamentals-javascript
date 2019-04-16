const Task = require('../models/Task');

function checkCurrentStatus(task) {
    task.open = task.status === 'Open';
    task.inProgress = task.status === 'In Progress';
    task.finished = task.status === 'Finished';
}

module.exports = {
  getIndex: function (req, res) {
    Task.find()
      .then(task => {
        res.render('index',
          {
            'openTasks': task.filter(t => t.status === 'Open'),
            'inProgressTasks': task.filter(t => t.status === 'In Progress'),
            'finishedTasks': task.filter(t => t.status === 'Finished')
          })
      })
  },
  getCreate: function (req, res) {
    return res.render('create');
  },
  postCreate: function (req, res) {
    Task.create(req.body)
      .then(() => res.redirect('/'))
      .catch(() => res.redirect('create'))
  },
  getEdit: function (req, res) {
    Task.findById(req.params.id)
      .then(task => {
        checkCurrentStatus(task);
        return res.render('edit', { task });
      });
  },
  postEdit: function (req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect('/'));
  },
  getDelete: function (req, res) {
    Task.findById(req.params.id)
      .then(task => {
        checkCurrentStatus(task);
        return res.render('delete', { task })
      });
  },
  postDelete: function (req, res) {
    Task.findByIdAndRemove(req.params.id)
      .then(() => res.redirect('/'));
  }
};