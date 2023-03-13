const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config");

const getData = async () => {
  return await db.students.findAll();
};

const studentDetails = async (opts) => {
  return await db.students.create(opts);
};

const verifyOtp = async (otpdata) => {
  return await db.students.findOne({ where: { otp: otpdata } });
};

const getUserBymobileNo = async (mobileNumber) => {
  const mobileOtp = await db.students.findOne({ where: { mobileNo: mobileNumber.mobileNo } });
  return mobileOtp;
};

const loginUser = async (req, res) => {
  const { mobileNo, password } = req.body;

  try {
    const user = await db.students.findOne({ where: { mobileNo } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, config.secretKey, { expiresIn: config.expiresIn });
    res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getData,
  studentDetails,
  verifyOtp,
  getUserBymobileNo,
  loginUser,
};
