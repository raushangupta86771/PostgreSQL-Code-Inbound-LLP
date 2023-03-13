const {Sequelize, DataTypes} = require("sequelize");

module.exports = (sequelize, DataType) => {
    const students = sequelize.define('students', {

      id: {
        type: DataType.BIGINT, primaryKey: true, autoIncrement: true
      },

        studentName: {
             type:DataType.STRING,
            allowNull: true
        },

        studentId: {
          type:DataType.INTEGER,
            allowNull:true
        },
        class: {
          type:DataType.INTEGER,
            allowNull:true
        },
        mobileNo:{
          type:DataType.BIGINT,
            allowNull: true

        },
        otp:{
          type:DataType.INTEGER,
          allowNull:true
        },
        
        password:{
          type:DataTypes.STRING,
          allowNull: true
        },

        createdAt:{
          type:DataType.BIGINT,
          allowNull: true
        },
        updatedAt:{
          type:DataType.BIGINT,
          allowNull: true
        } 
    },{
      hooks: {
        beforeCreate: (record, options) => {
          record.dataValues.createdAt = Math.floor(Date.now());
          record.dataValues.updatedAt = Math.floor(Date.now());
        },
        beforeUpdate: (record, options) => {
          record.dataValues.updatedAt = Math.floor(Date.now());
        },
        beforeBulkUpdate: (record, options) => {
          record.attributes.updatedAt = Math.floor(Date.now());
        },
        beforeBulkCreate: (record, options) => {
          record.attributes.createdAt = Math.floor(Date.now());
          record.dataValues.updatedAt = Math.floor(Date.now());
        }
      }
    })
    students.associate = function(models){


    };
    return students;
    
}