
const db = require("../models");

// Defining methods for the requestsController
module.exports = {
  findById: function(req, res)
 {
   console.log("Something's happening")
   db.Request.findByPk(req.params.id)
   .then(request => {
     console.log(request)
   })
 }
};
