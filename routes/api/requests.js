const router = require("express").Router();
const requestsController = require("../../controllers/requestsController");

// Matches with "/api/books"
router.route("/")
  .get(requestsController.findAll)
  .post(requestsController.create);

// Matches with "/api/books/:id"
router
  .route("/:email")
  .get(requestsController.findById)
  .put(requestsController.update)
  .delete(requestsController.remove);

module.exports = router;
