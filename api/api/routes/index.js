const express = require("express");
const { 
  getFlightData, 
  postLogin, 
  getCabinType,
  postSearch, 
} = require("../controller/index");

const router = express.Router();

router.get("/cities", getFlightData);
router.post("/login", postLogin);
router.get("/cabintype",getCabinType);
router.post("/search", postSearch)

module.exports = router;