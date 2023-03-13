const express = require("express");
const router = express.Router();
const ctrl = require("../controller/student");
const auth = require("../middleware/auth");

router.get("/getAllData", ctrl.getAllData);
router.post("/getAllDetails", ctrl.getAllDetails);
router.post("/getverifyOtp", ctrl.getOtpverify);
router.post("/signup", ctrl.signupUser);
router.post("/login", ctrl.loginUser);
router.get("/profile", auth, ctrl.getUserProfile);

module.exports = router;
