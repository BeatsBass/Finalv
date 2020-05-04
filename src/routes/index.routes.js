const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex,dos,tres } = require("../controllers/index.controller");

router.get("/uhiuhiu", renderIndex);
router.get("/", dos);
router.get("/ja", tres);

module.exports = router;