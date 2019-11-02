const router = require("express").Router();
const requestsController = require("../../controllers/requestsController");

// Matches with "/api/requests"
router.route("/")
  .get(requestsController.findAll)
  .post(requestsController.create);

// Matches with "/api/requests/:id"
router
  .route("/:email")
  .get(requestsController.findByEmail)
  .put(requestsController.update)
  .delete(requestsController.remove);

  router.route("/ind/:id")
  // .get(requestsController.findById)
  .get(requestsController.findById)
  .put(requestsController.update)

  router.route("/date/:date")
  .get(requestsController.findByDate)

  router.route("/annVid/:date")
  .get(requestsController.findAnnVidItemByDate)

  router.route("/connectionCard/:date")
  .get(requestsController.findConncectionCardItemByDate)

  router.route("/tvScreens/:date")
  .get(requestsController.findtvScreensItemByDate)

  router.route("/newsletter/:date")
  .get(requestsController.findNewsletteItemrByDate)

  router.route("/other/:date")
  .get(requestsController.findOtherItemByDate)

  router.route("/orgName/:orgName")
  .get(requestsController.findAllInOrg)

module.exports = router;
