'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthday: DataTypes.DATE,
    parent_id: DataTypes.INTEGER,
    date_of_join: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    last_login_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Student',
    paranoid: true
  });
  return Student;
};