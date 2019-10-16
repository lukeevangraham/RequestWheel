const db = require("../models");

// Defining methods for the requestsController
module.exports = {
  findAll: function(req, res) {
    db.Request.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.Request.findAll({ where: { email: req.params.email } })
      .then(function(dbModel) {
        return res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("creating initiated!");
    console.log(req.body);
    db.Request.create(req.body)
      .then(function(dbModel) {
        console.log("dbModel: ", dbModel);
        return res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Request.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("request params:")
    console.log(req.params)
    db.Request.destroy({
      where: {
        id: req.params.email
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
