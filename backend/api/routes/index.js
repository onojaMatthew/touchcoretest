const express = require("express");
const { getFlightData, postLogin } = require("../controller/index");

const router = express.Router();

router.get("/cities", getFlightData);
router.post("/login", postLogin, () => { console.log("we are here") });

module.exports = router;