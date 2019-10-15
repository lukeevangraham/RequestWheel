const db = require("../models");

// Defining methods for the requestsController
module.exports = {
  findAll: function(req, res) {
    db.Request.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("params: ")
    console.log(req.params.email)
    db.Request.findAll({ where: { email: req.params.email }})
      .then(function(dbModel) {
        console.log("dbModel is: ")
        console.log(dbModel)
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
    db.Request.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
