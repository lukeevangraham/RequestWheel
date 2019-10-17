const router = require("express").Router();
const requestRoutes = require("./requests");
const userRoutes = require("./users");
const fooRoutes = require("./foos")

// User routes
// router.use("/", userRoutes);
router.use("/user/", userRoutes)

router.use("/foo", fooRoutes)

// Request routes
router.use("/requests", requestRoutes);
// router.use("/request/ind", requestRoutes)

module.exports = router;
