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

module.exports = router;
