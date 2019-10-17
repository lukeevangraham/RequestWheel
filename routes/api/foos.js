const router = require("express").Router();
const fooController = require("../../controllers/fooControllers");


// Matches with "/api/foo/:id"
router
  .route("/:id")
  .get(fooController.findById)

module.exports = router;
