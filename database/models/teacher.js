'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Teacher.belongsTo(models.Classroom,{
        as : 'teacher',
        foreignKey : 'teacher_id'
      })
    }
  }
  Teacher.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthday: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    last_login_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Teacher',
    paranoid: true
  });
  return Teacher;
};