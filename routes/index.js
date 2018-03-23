const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

<<<<<<< HEAD
// API Routes
=======
//API Routes
>>>>>>> a9f8091e0dd63eaae34b43736d257d0bebdc0b08
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
<<<<<<< HEAD
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
=======
	res.sendFile(path.join(__dirname, "../client/build/index.html"));

>>>>>>> a9f8091e0dd63eaae34b43736d257d0bebdc0b08
});

module.exports = router;