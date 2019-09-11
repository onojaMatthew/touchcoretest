const express = require("express");
const { getFlightData, postLogin, getCabinType } = require("../controller/index");

const router = express.Router();

router.get("/cities", getFlightData);
router.post("/login", postLogin);
router.get("/cabintype",getCabinType);

module.exports = router;