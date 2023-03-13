const db = require("../models")

const getData = async () => {
    return await db.students.findAll();
};


const studentDetails = async (opts) => {
    // if (opts.mobileNo==null){
    //     return ("mobile number already exist")
    // }else{
    return await db.students.create(opts);
    // }
};


const verifyOtp = async(otpdata) => {
    return await db.students.findOne({where:{otp:otpdata}})
};

const getUserBymobileNo = async(mobileNumber)=>{
const mobileOtp =await db.students.findOne({where:{mobileNo:mobileNumber.mobileNo}})
return mobileOtp
}


module.exports = {
    getData,
    studentDetails,
    verifyOtp,
    getUserBymobileNo

};