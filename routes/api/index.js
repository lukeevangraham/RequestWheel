const router = require("express").Router();
const requestRoutes = require("./requests");
const userRoutes = require("./users");

// User routes
router.use("/", userRoutes);
router.use("/user", userRoutes)

// Book routes
router.use("/requests", requestRoutes);

module.exports = router;
