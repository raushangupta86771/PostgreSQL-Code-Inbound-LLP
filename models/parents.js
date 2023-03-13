const {Sequelize, DataTypes} = require("sequelize");

module.exports = (sequelize, DataType) => {
    const parents = sequelize.define('Parents', {

      id: {
        type: DataType.BIGINT, primaryKey: true, autoIncrement: true
      },

        parentName: {
             type:DataType.STRING,
            allowNull: true
        },

        rollNumber: {
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
        password:{
            type:DataType.STRING,
            allowNull:true
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
    parents.associate = function(models){


    };
    return parents;
    
}