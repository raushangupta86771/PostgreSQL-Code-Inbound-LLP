const query = require("../queries/parents")

const getAllParentData = async function(req,res){
    try{
        const body = req.body;
        const obj = {
            parentName:body.parentName,
            class:body.class,
            rollNumber:body.rollNumber,
            mobileNo:body.mobileNo,
            password:body.password    
        }
        const data = await query.getAllPrents(obj);
        return res.send({otp:"12345"})
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}


const getOtpverify = async(req, res) => {
    try{
        let data = await query.verifyOtp(req.body);
        if(req.body.otp=="9536"){
            return("otp verified")
        }
        else{
            console.log("incorrect otp")
        }
    }catch(err){
        console.log(err);
        res.send(err)
    }
}

const getAllData = async function(req, res){
    try{
        let data = await query.getData();
        return res.send(data);
    }
    catch(err){
        res.send(err)
    }
}


const login = async(req, res) => {
    try{
        const currentMobileNo = await query.userBymobileNo(req.body);
        if (currentMobileNo){
            res.send("login successfully")

        }else{
            res.send("error in login")
        }
    }catch(err){
        console.log(err)
        res.send(err)
    }
}



module.exports = {
    getAllParentData,
    getOtpverify,
    getAllData,
    login
}