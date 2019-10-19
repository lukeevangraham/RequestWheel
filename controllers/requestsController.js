import moment from "moment";

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
  findById: function(req, res) {
    db.Request.findByPk(req.params.id)
      .then(response => {
        return res.json(response);
      })
      .catch(err => res.status(422).json(err));
  },
  findByDate: function(req, res) {
    console.log("time to find by date!");
    console.log("query is: ", req.params)
    console.log("7 days before: ", moment(req.params.date).subtract(7, 'days').format("YYYY-MM-DD"))
    // db.Request.find(req.query)
  },
  create: function(req, res) {
    db.Request.create(req.body)
      .then(function(dbModel) {
        console.log("dbModel: ", dbModel);
        return res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Request.update(req.body, {
      where: {
        id: req.body.id
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Request.destroy({
      where: {
        id: req.params.email
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
