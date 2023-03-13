const db = require("../models");

const getAllPrents = async(obj) => {
    return await db.Parents.create(obj);
}


const getData = async () => {
    return await db.Parents.findAll();
};


const userBymobileNo = async(mobileNumber)=>{
    const mobileOtp =await db.students.findOne({where:{mobileNo:mobileNumber.mobileNo}})
    return mobileOtp
    }



module.exports={
    getAllPrents,
    getData,
    userBymobileNo
};