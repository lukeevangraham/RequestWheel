const router = require("express").Router();
const requestRoutes = require("./requests");
const userRoutes = require("./users");

// User routes
// router.use("/", userRoutes);
router.use("/user", userRoutes)

// Request routes
router.use("/requests", requestRoutes);

module.exports = router;
