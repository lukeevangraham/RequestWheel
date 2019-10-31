const moment = require("moment");
const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Defining methods for the requestsController
module.exports = {
  findAll: function(req, res) {
    // console.log("FINDING ALL: ", req);
    // db.Request.findAll(req.query)
    db.Request.findAll({
      limit: 10,
      order: [["createdAt", "DESC"]]
    })
      // .sort({ date: -1 })
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
  findAnnVidItemByDate: function(req, res) {
    console.log("REQ DATE: ", new Date(req.params.date).toISOString());
    let convertedToISO = moment(req.params.date).format();
    // .subtract(7, "days")
    let sevenDaysEarlier = moment(convertedToISO).subtract(2, "days");
    console.log("SEVEN DAYS EARLIER: ", moment(sevenDaysEarlier).format());
    db.Request.findAll({
      where: {
        annVideoDates: {
          [Op.between]: [sevenDaysEarlier, req.params.date]
        }
      }
    })
      .then(response => {
        // console.log("RESPONSE: ", response.annVideoDates[0])
        return res.json(response);
      })
      .catch(err => res.status(422).json(err));
  },
  findConncectionCardItemByDate: function(req, res) {
    let sevenDaysEarlier = moment(req.params.date)
      .subtract(7, "days")
      .format("YYYY-MM-DD");
    db.Request.findAll({
      where: {
        connectionCardDates: {
          [Op.between]: [sevenDaysEarlier, req.params.date]
        }
      }
    })
      .then(response => {
        return res.json(response);
      })
      .catch(err => res.status(422).json(err));
  },
  findtvScreensItemByDate: function(req, res) {
    let sevenDaysEarlier = moment(req.params.date)
      .subtract(7, "days")
      .format("YYYY-MM-DD");
    db.Request.findAll({
      where: {
        tvScreensDates: {
          [Op.between]: [sevenDaysEarlier, req.params.date]
        }
      }
    })
      .then(response => {
        return res.json(response);
      })
      .catch(err => res.status(422).json(err));
  },
  findNewsletteItemrByDate: function(req, res) {
    console.log("looking at newsletter dates!");
    let oneDayEarlier = moment(req.params.date)
      .subtract(1, "days")
      .format("YYYY-MM-DD");
    console.log("1 day earlier: ", oneDayEarlier);
    console.log("day: ", req.params.date);
    db.Request.findAll({
      where: {
        // body: "day"
        newsletterDates: {
          [Op.or]: [
            {
              [Op.substring]: req.params.date
            },
            {
              [Op.substring]: oneDayEarlier
            }
          ]
        }
      }
    })
      .then(response => {
        return res.json(response);
      })
      .catch(err => res.status(422).json(err));
  },
  findOtherItemByDate: function(req, res) {
    let sevenDaysEarlier = moment(req.params.date)
      .subtract(7, "days")
      .format("YYYY-MM-DD");
    db.Request.findAll({
      where: {
        requestDueDate: {
          [Op.between]: [sevenDaysEarlier, req.params.date]
        }
      }
    })
      .then(response => {
        return res.json(response);
      })
      .catch(err => res.status(422).json(err));
  },
  findByDate: function(req, res) {
    let sevenDaysEarlier = moment(req.params.date)
      .subtract(7, "days")
      .format("YYYY-MM-DD");
    db.Request.findAll({
      where: {
        [Op.or]: [
          {
            newsletterDates: {
              [Op.between]: [sevenDaysEarlier, req.params.date]
            }
          },
          {
            annVideoDates: {
              [Op.between]: [sevenDaysEarlier, req.params.date]
            }
          },
          {
            tvScreensDates: {
              [Op.between]: [sevenDaysEarlier, req.params.date]
            }
          },
          {
            connectionCardDates: {
              [Op.between]: [sevenDaysEarlier, req.params.date]
            }
          }
        ]
      }
    })
      .then(response => {
        return res.json(response);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("CREATING!");
    console.log("BODY: ", req.body);
    db.Request.create(req.body)
      .then(function(dbModel) {
        return res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("UPDATE:");
    console.log(req.body);
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
