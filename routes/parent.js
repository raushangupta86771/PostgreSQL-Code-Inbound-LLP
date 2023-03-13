const express = require ('express');
const router = express.Router();
const ctrl =  require("../controller/parents");
// const { getData } = require('../queries');

router.post ("/getParentData",ctrl.getAllParentData);
router.post("/getverifyOtp", ctrl.getOtpverify);
router.get("getAlldata", ctrl.getAllData);
router.post("/userLogin", ctrl.login);


module.exports= router;
